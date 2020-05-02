const INITIAL_STATE = {
  sections: [
    {
      title: "DRUMS",
      imageUrl:
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 1,
      linkUrl: "",
    },
    {
      title: "PIANO ",
      imageUrl:
        "https://images.unsplash.com/photo-1474711850460-45057e434715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 2,
      linkUrl: "",
    },
    {
      title: "BASS GUITARS",
      imageUrl:
        "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: "",
    },
    {
      title: "VIOLINS",
      imageUrl:
        "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1160&q=80",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "GUITARS",
      imageUrl:
        "https://images.unsplash.com/photo-1543062094-d22540cadf2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      size: "large",
      id: 5,
      linkUrl: "",
    }
  ]
};

const directoryReducer = (state =  INITIAL_STATE, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
