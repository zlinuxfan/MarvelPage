


class MarvelService {
    _protocol = 'https';
    _domain = 'gateway.marvel.com';
    _port = '443';
    _urlContext = '/v1/public/characters';
    _apikey = 'fc62724810429a10d6241c4dd358fb07';

    getResource = async (url) => {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status:  ${response.status}`);
        }

        return await response.json();
    }

    getAllCharacters = () => {
        return this.getResource(
            `${this._protocol}://${this._domain}:${this._port}/${this._urlContext}?limit=9&offset=210&apikey=${this._apikey}`
        );
    }

    getCharacter = (id) => {
        return this.getResource(
            `${this._protocol}://${this._domain}:${this._port}/${this._urlContext}?${id}&apikey=${this._apikey}`
        );
    }
}

export default MarvelService;
