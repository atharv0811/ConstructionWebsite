type Category = "living-room" | "bedroom" | "kitchen" | "dining";

type Project = {
    id: number;
    title: string;
    image: string;
};

export const projects: Record<Category, Project[]> = {
    "living-room": [
        { id: 1, title: "Modern Living Room1", image: "/livingroom/img1.png" },
        { id: 2, title: "Modern Living Room2", image: "/livingroom/img2.png" },
        { id: 3, title: "Modern Living Room3", image: "/livingroom/img3.png" },
        { id: 4, title: "Modern Living Room4", image: "/livingroom/img4.png" },
        { id: 5, title: "Modern Living Room5", image: "/livingroom/img5.png" },
    ],
    "bedroom": [
        { id: 1, title: "Elegant Bedroom1", image: "/bedroom/img1.png" },
        { id: 2, title: "Elegant Bedroom2", image: "/bedroom/img2.png" },
        { id: 3, title: "Elegant Bedroom3", image: "/bedroom/img3.png" },
        { id: 4, title: "Elegant Bedroom4", image: "/bedroom/img4.png" },
    ],
    "kitchen": [
        { id: 1, title: "Contemporary Kitchen1", image: "/kitchen/img1.png" },
        { id: 2, title: "Contemporary Kitchen2", image: "/kitchen/img2.png" },
        { id: 3, title: "Contemporary Kitchen3", image: "/kitchen/img3.png" },
        { id: 4, title: "Contemporary Kitchen4", image: "/kitchen/img4.png" },
        { id: 5, title: "Contemporary Kitchen5", image: "/kitchen/img5.png" },
        { id: 6, title: "Contemporary Kitchen6", image: "/kitchen/img6.png" },
        { id: 7, title: "Contemporary Kitchen7", image: "/kitchen/img7.png" },
    ],
    "dining": [
        { id: 1, title: "Contemporary Kitchen1", image: "/dining/img1.png" },
        { id: 2, title: "Contemporary Kitchen2", image: "/dining/img2.png" },
        { id: 3, title: "Contemporary Kitchen3", image: "/dining/img3.png" },
        { id: 4, title: "Contemporary Kitchen4", image: "/dining/img4.png" },
        { id: 5, title: "Contemporary Kitchen5", image: "/dining/img5.png" },
    ],
};
