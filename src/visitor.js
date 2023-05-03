export default class Visitor {
    visitChildren(ctx) {
        if (!ctx) {
            return;
        }

        if (ctx.children) {
            let containsErrors = false;

            const result = ctx.children.map(child => {
                if (child.exception) {
                    containsErrors = true;
                }

                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    return child.getText();
                }
            });

            if (containsErrors) {
                throw new Error("The input contains errors, please, see above");
            }

            return result;
        }
    }
}
