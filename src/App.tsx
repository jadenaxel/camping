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
                        <div className="page-destinations-container--viewMore">
                            View All
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-letter">
                <div className="container">
                    <div className="page-letter-container">
                        <div className="page-letter-container-parts">
                            <div className="page-letter-container-parts--touch">
                                <p className="page-letter-container-parts--touch-title">
                                    Let's Stay in Touch
                                </p>
                                <p className="page-letter-container-parts--touch-description">
                                    Get travel planning ideas, helpful tips, and
                                    stories from our visitors delivered right to
                                    your inbox.
                                </p>
                                <div className="page-letter-container-parts--touch-input">
                                    <img
                                        src="../assets/email.png"
                                        alt="Email Icon"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <div className="page-letter-container-parts--touch-input--send">
                                        <img
                                            src="../assets/send.png"
                                            alt="Send Icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="page-letter-container-parts--svg">
                                <img
                                    src="../assets/campingSVG.png"
                                    alt="Camping SVG Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="page-footer">
                <div className="container">
                    <div className="page-footer-container">
                        <div className="page-footer-container--section-1">
                            <div className="page-footer-container--section-1--hipcamp">
                                <p className="page-footer-container--section-1--hipcamp-title">
                                    Hipcamp is everywhere you want to camp.
                                </p>
                                <p className="page-footer-container--section-1--hipcamp-description">
                                    Discover unique experiences on ranches,
                                    nature preserves, farms, vineyards, and
                                    public campgrounds across the U.S. Book tent
                                    camping, treehouses, cabins, yurts,
                                    primitive backcountry sites, car camping,
                                    airstreams, tiny houses, RV camping,
                                    glamping tents and more.
                                </p>
                            </div>
                            <div className="page-footer-container--section-1--know">
                                <p className="page-footer-container--section-1--know--title">
                                    Get to Know Us
                                </p>
                                <ul className="page-footer-container--section-1--know--list">
                                    <li className="page-footer-container--section-1--know--list-item">
                                        About Us
                                    </li>
                                    <li className="page-footer-container--section-1--know--list-item">
                                        Rules & Reservation Policies
                                    </li>
                                    <li className="page-footer-container--section-1--know--list-item">
                                        Accessibility
                                    </li>
                                    <li className="page-footer-container--section-1--know--list-item">
                                        Media Center
                                    </li>
                                    <li className="page-footer-container--section-1--know--list-item">
                                        Site Map
                                    </li>
                                </ul>
                            </div>
                            <div className="page-footer-container--section-1--withUs">
                                <p className="page-footer-container--section-1--withUs--title">
                                    Plan with Us
                                </p>
                                <ul className="page-footer-container--section-1--withUs--list">
                                    <li className="page-footer-container--section-1--withUs--list-item">
                                        Find Trip Inspiration
                                    </li>
                                    <li className="page-footer-container--section-1--withUs--list-item">
                                        Build a Trip
                                    </li>
                                    <li className="page-footer-container--section-1--withUs--list-item">
                                        Buy a Pass
                                    </li>
                                    <li className="page-footer-container--section-1--withUs--list-item">
                                        Enter a Lottery
                                    </li>
                                </ul>
                            </div>
                            <div className="page-footer-container--section-1--help">
                                <p className="page-footer-container--section-1--help--title">
                                    Let Us Help You
                                </p>
                                <ul className="page-footer-container--section-1--help--list">
                                    <li className="page-footer-container--section-1--help--list-item">
                                        Your Account
                                    </li>
                                    <li className="page-footer-container--section-1--help--list-item">
                                        Your Reservations
                                    </li>
                                    <li className="page-footer-container--section-1--help--list-item">
                                        Contact Us
                                    </li>
                                    <li className="page-footer-container--section-1--help--list-item">
                                        Help Center
                                    </li>
                                    <li className="page-footer-container--section-1--help--list-item">
                                        Submit Feedback
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="page-footer-container--section-2">
                            <img src="../assets/download.png" alt="Download" />
                        </div>
                        <div className="page-footer-container--section-3">
                            <p>© 2020. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default App;
