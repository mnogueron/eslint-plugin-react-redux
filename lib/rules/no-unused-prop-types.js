// flow

const ruleComposer = require('eslint-rule-composer');

const noUnusedPropTypesReact = require('eslint-plugin-react').rules['no-unused-prop-types'];

const getPropsUsedInRedux = () => [];


module.exports = ruleComposer.filterReports(
  noUnusedPropTypesReact,
  (problem, metadata) => {
    const usedInRedux = getPropsUsedInRedux(metadata);
    // problem node is not cintained in usedInRedux nodes;
    return metadata.sourceCode.getFirstToken(problem.node).value !== usedInRedux;
  },
);
