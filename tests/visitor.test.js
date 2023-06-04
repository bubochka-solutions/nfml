import Visitor from '../src/visitor';

describe('Visitor', () => {
    let visitor;

    beforeEach(() => {
        visitor = new Visitor();
    });

    describe('visitChildren', () => {
        it('should return undefined when ctx is null', () => {
            const result = visitor.visitChildren(null);
            expect(result).toBeUndefined();
        });

        it('should return an empty array when ctx has no children', () => {
            const ctx = { children: [] };
            const result = visitor.visitChildren(ctx);
            expect(result).toEqual([]);
        });

        it('should return an array of child nodes when ctx has children with no nested children', () => {
            const ctx = {
                children: [
                    { getText: () => 'child1' },
                    { getText: () => 'child2' },
                ],
            };
            const result = visitor.visitChildren(ctx);
            expect(result).toEqual(['child1', 'child2']);
        });

        it('should return an array of child nodes when ctx has children with nested children', () => {
            const ctx = {
                children: [
                    {
                        children: [
                            { getText: () => 'grandchild1' },
                            {
                                children: [{ getText: () => 'greatGrandchild1' }],
                                accept: function (visitor) { return visitor.visitChildren(this) }
                            },
                        ],
                        accept: function (visitor) { return visitor.visitChildren(this) },
                    },
                    { getText: () => 'child2' },
                ],
            };
            const result = visitor.visitChildren(ctx);
            expect(result).toEqual([['grandchild1', ['greatGrandchild1']], 'child2']);
        });
    });
});
