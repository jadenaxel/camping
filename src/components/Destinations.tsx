import type { FC } from "react";

const Destination: FC<any> = ({ item }: any): JSX.Element => {
    return (
        <div className="destinations-container">
            <div
                className="destinations-container-image"
                style={{
                    backgroundImage: `url("../images/destination/${item.image}")`,
                }}
            >
                <div className="destinations-container-image-heart">
                    <img src="../images/heart.png" alt="Heart" />
                </div>
            </div>
            <div className="destinations-container-princing">
                <p>$36/night</p>
            </div>
            <p className="destinations-container-title">{item.title}</p>
            <p className="destinations-container-description">
                Book unique camping experiences on over 300,000 campsites.
            </p>
            <button className="destinations-container-readMore">
                Read More
            </button>
        </div>
    );
};

export default Destination;
