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
      description:
        'Aliqua excepteur magna nisi laboris minim amet qui labore ea anim sint cillum minim irure. Ut eiusmod velit laborum duis. Nisi quis ad est deserunt amet qui nulla magna sunt labore. Sit anim aliqua commodo eu officia magna veniam ut velit aliquip mollit do irure. Ullamco fugiat ad enim aliqua nulla proident magna tempor elit. Ut ad mollit ipsum reprehenderit esse exercitation do nisi exercitation consectetur qui. Officia Lorem ipsum consequat do qui est consequat aliqua.',
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
      description:
        'Nulla ea aliqua ea id dolor dolor Lorem. Consectetur ullamco aliqua excepteur in pariatur id pariatur eu. Sunt elit id minim ad incididunt consectetur excepteur aute minim Lorem proident. Voluptate eu ex aliquip eiusmod dolor laborum amet laborum enim anim aliqua nulla magna.',
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
      image: 'rope.jpg',
      description:
        'Dolor qui officia culpa magna consequat veniam duis culpa labore magna aliqua do tempor non. Esse commodo pariatur sunt reprehenderit ipsum non. Irure non mollit proident nulla tempor fugiat velit culpa.',
      details: ['Custom Fyke nets', 'lobster rope doormats'],
    },
    {
      name: 'property management',
      image: 'property-management.jpg',
      description: '',
    },
    {
      name: 'glass',
      image: 'glass.jpg',
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
      image: 'wood-burning.jpg',
      details: 'Custom signs made to order in any shape or size.',
    },
  ],

  employees: {
    owners: ['Lawrence Friend Jr.', 'Emerald Friend'],
  },
};

export default store;
