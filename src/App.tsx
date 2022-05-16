import type { FC } from "react";

import { Activity, Destination } from "./components";

// Styles
import "./styles/app.scss";

const MenuNames: string[] = [
    "Home",
    "Destination",
    "Near Me",
    "Events",
    "Blog",
    "Gallery",
    "About",
    "Contact Us",
];

const activity: Object[] = [
    {
        image: "../assets/activity/bonfire.png",
        title: "Camping & Day Use",
        description:
            "Return to your favorite spot or discover a new one that’s right for you.",
    },
    {
        image: "../assets/activity/tickets.png",
        title: "Tickets",
        description: "Reserve tours and tickets to participate in events.",
    },
    {
        image: "../assets/activity/card.png",
        title: "Permits",
        description: "Obtain permits for access to high-demand locations.",
    },
    {
        image: "../assets/activity/fishing.png",
        title: "Recreation Activities",
        description:
            "Find the best spots for hunting, fishing & recreational shooting.",
    },
];

const destination: Object[] = [
    {
        title: "Trickle Creek Ranch",
        image: "1.png",
    },
    {
        title: "Dragonfly Tiny Cabin",
        image: "2.png",
    },
    {
        title: "Tiny Cabin in the mountains",
        image: "3.png",
    },
    {
        title: "The Stuga",
        image: "4.png",
    },
    {
        title: "Luxury Tiny Beach Cabin",
        image: "5.png",
    },
    {
        title: "The Summit Cabin",
        image: "6.png",
    },
    {
        title: "Kindred Spirits Cabin",
        image: "7.png",
    },
    {
        title: "The Hermitage Cabin",
        image: "8.png",
    },
    {
        title: "Red Lifeguard Stand",
        image: "9.png",
    },
    {
        title: "The Tree House",
        image: "10.png",
    },
    {
        title: "Barrier island elevated tent",
        image: "11.png",
    },
    {
        title: "Ninovan on the Shore",
        image: "12.png",
    },
];

const App: FC = (): JSX.Element => {
    return (
        <div className="page">
            <header className="page-header">
                <div className="container">
                    <div className="page-header--navigation-container">
                        <div className="page-header--navigation-container-logoandmenu">
                            <div className="page-header--navigation-container-logoandmenu-logo">
                                <img src="../assets/logo.png" alt="Logo" />
                            </div>
                            <div className="page-header--navigation-container-logoandmenu--menu-container">
                                <nav className="page-header--navigation-container-logoandmenu--menu-container-item">
                                    <ul className="page-header--navigation-container-logoandmenu--menu-container-item--list">
                                        {MenuNames.map(
                                            (name: string, index: number) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="page-header--navigation-container-logoandmenu--menu-container-item--list-item"
                                                    >
                                                        <a href="#">{name}</a>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="page-header--navigation-container-burgerMenu">
                            <img src="../assets/menu.png" alt="Burger Menu" />
                        </div>
                        <div className="page-header--navigation-container-login">
                            <button className="page-header--navigation-container-login--signUp">
                                Sign Up
                            </button>
                            <button className="page-header--navigation-container-login--signIn">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="page-header--titleSection-container">
                        <h1 className="page-header--titleSection-container-title">
                            Find Yourself Outside.
                        </h1>
                        <p className="page-header--titleSection-container-description">
                            Book unique camping experiences on over 300,000
                            campsites, cabins, RV parks, public parks and more.
                        </p>
                        <button className="page-header--titleSection-container-button">
                            Discover
                        </button>
                    </div>
                </div>
            </header>
            <div className="page-activity">
                <div className="container">
                    <div className="page-activity-container">
                        {activity.map((item, index: number) => {
                            return <Activity item={item} />;
                        })}
                    </div>
                </div>
            </div>
            <div className="page-destinations">
                <div className="container">
                    <div className="page-destinations-container">
                        <div className="page-destinations-container--logo">
                            <img src="../assets/map.png" alt="" />
                        </div>
                        <p className="page-destinations-container--title">
                            Explore Destinations & Activities
                        </p>
                        <div className="page-destinations-container--destinations">
                            {destination.map((item: any, index: number) => {
                                return <Destination item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;
