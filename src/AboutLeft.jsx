const ExperienceCard = (props) => {
    return (
        <div className="flex flex-col m-1">
            <div className="flex justify-between flex-wrap">
                <h1 className="text-white">
                    {props.title}
                </h1>
                <h1 className="text-white">
                    {props.date}
                </h1>
            </div>
            <p className=" w-4/5 self-center text-white text-xs list-item list-inside list-disc">
                {props.desc}
            </p>
        </div>
    );
}

const AboutLeft = () => {
    return (
        <div className="leftcolumn flex flex-col justify-end items-center">
            <div className="w-4/6 mt-3 mb-3">
                <h1 className="text-white text-3xl p-2 blur-0 text-center">
                    Experience
                </h1>
                <div className="border p-3">
                    <ExperienceCard title="Test" date="2023" desc="Test" />
                    <ExperienceCard title="Test" date="2022" desc="Test" />
                    <ExperienceCard title="Test" date="2020" desc="Test" />
                </div>
            </div>
            <div className="w-4/6 mt-3 mb-3">
                <h1 className="text-white text-3xl p-2 blur-0 text-center">
                    Contact
                </h1>
                <div className="border p-3 ">
                    <p className="text-white break-words">Test</p>
                </div>
            </div>
        </div>
    );
};

export default AboutLeft;