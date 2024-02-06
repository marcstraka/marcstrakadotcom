const groups = [
	{name: "home", text: "Home"},
  {name: "series2024", text: "Seascapes 2024"},
    {name: "pencil", text: "Pencil"},
    {name: "color_pencil", text: "Color Pencil"},
    {name: "painting", text: "Painting"},
    {name: "pastel", text: "Pastel"},
    {name: "mixed_media", text: "Mixed Media"},
    {name: "lamps", text: "Mood Lamps"}
  ];
const renderLink = (name, text) =>
    <button value={`${name}`} key={name} id={name} className="link2">{text}</button>;
const renderLinks =
  (links) => links.map(({name, text}) => renderLink(name, text));

const navBar = <div className="linkContainer">
{renderLinks(groups)}
</div>

export default navBar;