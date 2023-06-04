// Base listener class
import NfmlListener from './antlr/nfmlListener.js';

const mode = {
    objectContext: 'OBJECT',
    multilineStringContext: 'MULTILINE_STRING',
    listContext: 'LIST',
    arrayContext: 'ARRAY'
};

const kebabToCamelCase = (string) =>
    string.replace(/-./g, (x) => x[1].toUpperCase());

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export default class Listener extends NfmlListener {
    #document;
    #modeStack = [];
    #identifierStack = [];

    #objectReferenceStack = [];
    #currentObjectReference;

    #multilineStringBuffer = '';

    getDocument() {
        return this.#document;
    }

    #getCurrentMode() {
        const modeStack = this.#modeStack;

        if (modeStack.length === 0) {
            return null;
        }

        return modeStack[modeStack.length - 1];
    }

    // Enter a parse tree produced by nfmlParser#nfml.
    enterNfml(ctx) {
        this.#document = {};
        this.#currentObjectReference = this.#document;
    }

    // Enter a parse tree produced by nfmlParser#identifier.
    enterIdentifier(ctx) {
        const identifier = ctx.getText();
        const camelCaseId = kebabToCamelCase(identifier);
        this.#identifierStack.push(camelCaseId);
    }

    // Enter a parse tree produced by nfmlParser#string.
    enterString(ctx) {
        const {start, stop} = ctx;
        let startIndex = -1;
        let stopIndex = -1;

        if (start && stop) {
            startIndex = start.start;
            stopIndex = stop.stop;
        }

        let value;

        if (startIndex < 0 && stopIndex < 0) {
            // Fallback
            value = ctx.getText();
        } else {
            // The purpose of doing like this is including whitespace
            // into string.
            // The thing is whitespace is redirected into channel HIDDEN,
            // so we need to get it back.
            // The most obvious solution is to read the whole token manually,
            // so it includes all the needed characters.
            value = ctx.start.getInputStream().getText(startIndex, stopIndex);
        }

        // If the string is "raw"
        if (value[0] === '\\') {
            // Replace the leading sign
            value = value.replace('\\', '');
        }

        const currentMode = this.#getCurrentMode();

        switch (currentMode) {
            case mode.multilineStringContext:
                this.#multilineStringBuffer += value + '\n';
                break;
            case mode.listContext:
                this.#currentObjectReference.push(value);
                break;
            default:
                const identifier = this.#identifierStack.pop();
                this.#currentObjectReference[identifier] = value;
        }
    }

    // Enter a parse tree produced by nfmlParser#multiline_string.
    enterMultiline_string(ctx) {
        this.#modeStack.push(mode.multilineStringContext);
    }

    // Exit a parse tree produced by nfmlParser#multiline_string.
    exitMultiline_string(ctx) {
        const identifier = this.#identifierStack.pop();
        const value = this.#multilineStringBuffer;
        this.#currentObjectReference[identifier] = value;

        this.#modeStack.pop();
        this.#multilineStringBuffer = '';
    }


    // Enter a parse tree produced by nfmlParser#list.
    enterList(ctx) {
        const identifier = this.#identifierStack.pop();

        const currentObject = this.#currentObjectReference;
        const newObject = [];
        currentObject[identifier] = newObject;

        this.#objectReferenceStack.push(currentObject);
        this.#currentObjectReference = newObject;

        this.#modeStack.push(mode.listContext);
    }

    // Exit a parse tree produced by nfmlParser#list.
    exitList(ctx) {
        const rootObject = this.#objectReferenceStack.pop();
        this.#currentObjectReference = rootObject;

        this.#modeStack.pop();
    }


    // Enter a parse tree produced by nfmlParser#array.
    enterArray(ctx) {
        const identifier = this.#identifierStack.pop();

        const currentObject = this.#currentObjectReference;
        const newObject = [];
        currentObject[identifier] = newObject;

        this.#objectReferenceStack.push(currentObject);
        this.#currentObjectReference = newObject;

        this.#modeStack.push(mode.arrayContext);
    }

    // Exit a parse tree produced by nfmlParser#array.
    exitArray(ctx) {
        const rootObject = this.#objectReferenceStack.pop();
        this.#currentObjectReference = rootObject;

        this.#modeStack.pop();
    }


    // Enter a parse tree produced by nfmlParser#object.
    enterObject(ctx) {
        const currentMode = this.#getCurrentMode();

        if (currentMode === mode.arrayContext) {
            const currentObject = this.#currentObjectReference;
            const newObject = {};
            currentObject.push(newObject);

            this.#objectReferenceStack.push(currentObject);
            this.#currentObjectReference = newObject;
        } else {
            const identifier = this.#identifierStack.pop();

            if (identifier) {
                const currentObject = this.#currentObjectReference;
                const newObject = {};
                currentObject[identifier] = newObject;

                this.#objectReferenceStack.push(currentObject);
                this.#currentObjectReference = newObject;
            }
        }

        this.#modeStack.push(mode.objectContext);
    }

    // Exit a parse tree produced by nfmlParser#object.
    exitObject(ctx) {
        const identifier = this.#identifierStack.pop();
        const classId = capitalize(identifier);
        this.#currentObjectReference._class = classId;

        const rootObject = this.#objectReferenceStack.pop();
        if (rootObject) {
            this.#currentObjectReference = rootObject;
        }

        this.#modeStack.pop();
    }
}
