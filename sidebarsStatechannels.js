module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'index',
        'nodes',
      ],
    },
    {
      type: 'category',
      label: 'State Channel Stack',
      collapsed: false,
      items: [
        'stack/jvm',
        'stack/scala',
        'stack/sdk',
        'stack/aci',
      ],
    },
    {
      type: 'category',
      label: 'Consensus',
      collapsed: false,
      items: [
        'consensus/overview',
        'consensus/layer1',
        'consensus/layer0',
        'consensus/complete',
        'consensus/dag-l1',
        'consensus/dag-l0',
      ],
    },
    {
      type: 'category',
      label: 'Data Flow',
      collapsed: false,
      items: [
        'data-flow/overview',
        'data-flow/define',
        'data-flow/serialize',
        'data-flow/sign-send',
        'data-flow/query-retrieve',
        'data-flow/deserialize',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: false,
      items: [
        'best-practices/overview',
        'best-practices/sc-validation',
        'best-practices/nodes',
        'best-practices/private-public',
        'best-practices/dag',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'examples/compile-tessellation',
        'examples/l0-cluster-setup',
        'examples/l1-cluster-setup',
        'examples/simple',
        'examples/data-transfer'
      ],
    },
  ],

};
