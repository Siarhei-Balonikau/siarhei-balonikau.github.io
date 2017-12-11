module.exports = function ({ types: t }) {
	return {
		visitor: {
			CallExpression(path, {opt: options}) {
				const callee = path.node.callee;
        
				if (t.isMemberExpression(callee)) {
					const calleePath = path.get('callee'); 
          
					if (t.isIdentifier(calleePath.node.object, { name: "console" }) && t.isIdentifier(calleePath.node.property, { name: "log" })) {
						path.remove();
					}
				}
			}
		}
	};
};
