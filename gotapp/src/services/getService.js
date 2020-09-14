export default class GameService extends Component {

  constructor(){
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }

 async getResource(url) {
    const result = await fetch(`${this._apiBase}${url}`);

    if(!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();

  };


  getAllCharacters(){
    return this.getResource(`/characters?page=5&pageSize=10`);
  }

  getCharacter(id) {
    return this.getResource(`/characters/${id}`);
  }
}

const got = new GameService();

got.getAllCharacters()
.then(res => res.forEach(item => {
  console.log(item.name)
}));

got.getCharacter(133)
.then(res => console.log(res));