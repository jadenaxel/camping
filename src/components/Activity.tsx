import type { FC } from "react";

const Activity: FC<any> = ({ item }: { item: any }): JSX.Element => {
    return <div>
        <div className="activity-container">
            <div className="activity-container-image">
                <img src={item.image} alt="activity" />
            </div>
            <div className="activity-container-content">
                <h2 className="activity-container-content-title">{item.title}</h2>
                <p className="activity-container-content-description">{item.description}</p>
            </div>
        </div>
    </div>;
};

export default Activity;
