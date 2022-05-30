
import React, { ReactNode, useEffect, useState } from "react";
import "./SlideShow.scss";

interface IParams {
    YTVideos?: string[];
    images?: string[];
}

type IMediaList = {url: string; type: ("YTVIDEO"|"IMAGE")}[];

const SlideShow = (
    {YTVideos, images}: IParams
) => {

    const [media, setMedia] = useState<IMediaList>();
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const newMedia: IMediaList = [];
    
        if (YTVideos) YTVideos.forEach((v, i) => {
            newMedia.push({type: "YTVIDEO", url: v});
        });
    
        if (images) images.forEach((img, i) => {
            newMedia.push({type: "IMAGE", url: img});
        });

        setMedia(newMedia);
    },[]);

    const content = media ? (
        media.map((m, i) => {
            switch (m.type) {
                case "YTVIDEO":
                    return <YTVideoEmbed key={i} url={m.url}/>
                    break;
            
                case "IMAGE":
                    return <img key={i} src={m.url}/>
                    break;
            }
        })
    ) : [<span></span>];

    const thumbNails = media ? (
        media.map((m, i) => {
            let src = "";
            switch (m.type) {
                case "YTVIDEO":
                    src = "/img/yticon.png";
                    break;
                case "IMAGE":
                    src = m.url;
                    break;
            }
            return <img className="thumbnail" src={src} key={i} data-index={i}/>
        })
    ) : [<span></span>];

    const onThumbnailClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const newPos = (e.target as any).getAttribute("data-index");
        if (newPos) setPosition(newPos);
    };

    return (
        <div className="slideshow">
            {content[position]}
            {(thumbNails.length > 1) &&
                <div onClick={onThumbnailClick} className="thumbnails">
                    {thumbNails}
                </div>
            }
        </div>
    );
};

const YTVideoEmbed = (
    {url}: {url:string}
) => (
    <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
);

export default SlideShow;
