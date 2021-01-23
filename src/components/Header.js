import moment from 'moment';

export default function Header(props) {
    let lastUpdated = new Date();
    lastUpdated = moment(lastUpdated).format(" DD.M.YYYY HH:mm ") // 19.1.2021 21:04
    return (
        <header className="app-bar full-width primary--background">
            <h3 className="inline margin " >Weather app</h3>
            <p className="inline margin ">last updated: {lastUpdated}</p>
        </header>
    );
}