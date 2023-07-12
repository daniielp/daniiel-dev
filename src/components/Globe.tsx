"use client"
import React, { useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'
import countries from "@/lib/globe-data-min.json";

const locationData = [
    {
        "text": "Aarhus",
        "size": 1.0,
        "country": "Denmark",
        "city": "Aarhus",
        "lat": "56.020937291141995",
        "lng": "10.103296131465912"
    }
]

const ReactGlobe = ({ width = 720, height = 720 }: { width?: number, height?: number }) => {
    const globeEl = useRef<any | null>();

    useEffect(() => {
        globeEl.current.pointOfView({
            lat: "56.020937291141995",
            lng: "10.103296131465912",

        })
    }, [])

    return (
        <Globe
            backgroundColor='rgba(0,0,0,0)'
            ref={globeEl}
            animateIn={true}
            width={width}
            height={height}
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={.7}
            showAtmosphere={false}
            atmosphereColor='#6366f1'
            hexPolygonColor={(e: any) => {
                if (
                    ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
                        e.properties.ISO_A3
                    )
                ) {
                    return "rgba(255,255,255, 1)";
                } else return "rgba(255,255,255, 0.7)";
            }}
            pointsData={locationData}
            ringsData={locationData}
            ringColor={() => "#eab308"}
            ringRepeatPeriod={850}
            pointColor={() => "#6366f1"}
            pointsMerge={true}
            pointAltitude={0.07}
            pointRadius={.25}
            labelsData={locationData}
            labelColor={() => "#eab308"}
            labelDotOrientation={(e: any) => {
                return e.text === "ALA" ? "top" : "right";
            }}
            labelSize={(e: any) => e.size}
        // arcColor={"#6366f1"}
        />
    )
}

export default ReactGlobe