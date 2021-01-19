import moment from 'moment';

export default function Header({ date }) {
    let info = moment().format(" DD.M.YYYY HH:mm ") // 19.1.2021 21:04
    return (
        <header className="App-header">
            Weather app,
            last updated: {info}
        </header>
    );
}