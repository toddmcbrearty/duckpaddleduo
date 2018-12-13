const store = {
  company: {
    logo: 'duck-head.svg',
    tag: 'We can do anything!',
    name: 'Duck Puddle Duo',
    abbr: 'DPD',
    address: '52 Duck Puddle RD',
    city: 'Nobleboro',
    state: 'ME',
    postalcode: '04555',
    phoneNumbers: ['207 624 1147', '207 624 1847'],
    email: {
      primary: 'duckpuddleduo@gmail.com',
    },
  },
  services: [
    {
      name: 'construction',
      image: 'construction.jpg',
      details: [
        'Custom Carpentry',
        'Masonry',
        'Roofing',
        'Decks',
        'Remodeling',
        'Plumbing',
        'Honey-do list',
      ],
    },
    {
      name: 'mechanical',
      image: 'mechanical.jpg',
      details: [
        'Service and repair of snowblowers',
        'generators',
        'log splitters',
        'weed wackers',
        'lawnmowers',
        'tractors',
        'heavy equipment and more. We also offer fabrication welding',
      ],
    },
    {
      name: 'rope/sewing',
      details: ['Custom Fyke nets', 'lobster rope doormats'],
    },
    { name: 'property management' },
    {
      name: 'glass',
      details: [
        'Lampwork-handmade beads',
        'pendants',
        'wine stoppers',
        'ornaments',
        'cremation pendants',
        'window hangers and more. If you can dream it',
        'we can make it… Stained Glass- custom designs made to order',
      ],
    },
    {
      name: 'woodburning',
      details: 'Custom signs made to order in any shape or size.',
    },
  ],

  employees: {
    owners: ['Lawrence Friend Jr.', 'Emerald Friend'],
  },
};

export default store;
