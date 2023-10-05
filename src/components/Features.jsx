import { HiArrowRight } from "react-icons/hi";

const Features = () => {
    const dataFeatures = [
        {
            title: "Embed",
            text: "Sync content from all your favorite tools",
            link: "abc",
        },
        {
            title: "API",
            text: "Pull docs where you need them or search instantly",
            link: "abc",
        },
        {
            title: "Zapier",
            text: "Zapier to automamte any of your workflows",
            link: "abc",
        },
        {
            title: "Import any doc",
            text: "Google Drive, Notion, Evernote.. you name it. Bring your docs, notes, and wiki with you.",
            link: "abc",
        },
        {
            title: "Templates library",
            text: "Beat the blank canvas with ready-made templates and keep your docs consistent across all teams.",
            link: "abc",
        },
        {
            title: "Slack intergration",
            text: "Search for info living in Slite, sync channels, and get relevant notifications all from Slack",
            link: "abc",
        },
    ];
    const dataComments = [
        {
            text: "We switched from Confluence because Slite is easy to use for the entire company, not just the product team.",
            profile: "https://source.unsplash.com/1700x1001?profile",
            name: "DJ SIPE",
            title: "JOBTARGET",
        },
        {
            text: "We looked for an alternative to Notion because an all-in-one solution isn't suited to our rapid growth.",
            profile: "https://source.unsplash.com/1700x1002?profile",
            name: "CHRIS ZONNEVELD",
            title: "CIPHIX",
        },
        {
            text: "When we tried Slite, we found something that worked great, simple, focused but also flexible.",
            profile: "https://source.unsplash.com/1700x1003?profile",
            name: "GIACOMO MELZI",
            title: "KAWA STUDIO",
        },
        {
            text: "The best thing about Slite is it's Clutter free, clean interface. I was a power user of Confluence since last 5 years.",
            profile: "https://source.unsplash.com/1700x1004?profile",
            name: "DEEPAK CHOUDHARY",
            title: "WE-R",
        },
        {
            text: "Especially in remote teams, you want everyone to be able to find everything they need.",
            profile: "https://source.unsplash.com/1700x1005?profile",
            name: "JOANNA DELANEY",
            title: "PROWRITINGAID",
        },
        {
            text: "It has all you need, with a ton of templates and self-intuitive explanations of what to do.",
            profile: "https://source.unsplash.com/1700x1006?profile",
            name: "BAYU AJI SADEWA",
            title: "UI / UX DESIGN",
        },
    ];
    return (
        <section className='px-5 md:px-10 w-full max-w-[1400px] py-16 flex flex-col'>
            <p className='text-3xl md:text-5xl font-semibold pb-10'>
                Get going in no time.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5'>
                {dataFeatures.map((items, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-5 justify-between'
                    >
                        <p className='md:text-4xl text-2xl font-bold'>
                            {items.title}
                        </p>
                        <p className='text-gray-400 text-lg'>{items.text}</p>
                        <button className='flex items-center font-semibold text-sm text-[#FB0E10] gap-2'>
                            <p>Browse templates</p>
                            <HiArrowRight />
                        </button>
                    </div>
                ))}
            </div>

            <p className='text-3xl md:text-5xl font-semibold pt-16 md:pt-32 pb-10'>
                Growing teams see the difference.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-10 md:gap-y-5'>
                {dataComments.map((items, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-3 justify-between'
                    >
                        <p className='text-gray-400 text-lg'>{items.text}</p>
                        <div className='flex items-center gap-2'>
                            <div className='h-[45px] w-[45px] flex'>
                                <img
                                    src={items.profile}
                                    alt=''
                                    className='object-cover rounded-full'
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold'>{items.name}</p>
                                <p className='font-bold text-sm'>
                                    {items.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
