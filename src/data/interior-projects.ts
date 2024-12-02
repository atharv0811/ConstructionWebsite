type Category = "living-room" | "bedroom" | "kitchen" | "dining";

type Project = {
    id: number;
    title: string;
    image: string;
};

export const projects: Record<Category, Project[]> = {
    "living-room": [
        { id: 1, title: "Modern Living Room1", image: "interior/livingroom/img1.png" },
        { id: 2, title: "Modern Living Room2", image: "interior/livingroom/img2.png" },
        { id: 3, title: "Modern Living Room3", image: "interior/livingroom/img3.png" },
        { id: 4, title: "Modern Living Room4", image: "interior/livingroom/img4.png" },
        { id: 5, title: "Modern Living Room5", image: "interior/livingroom/img5.png" },
    ],
    "bedroom": [
        { id: 1, title: "Elegant Bedroom1", image: "interior/bedroom/img1.png" },
        { id: 2, title: "Elegant Bedroom2", image: "interior/bedroom/img2.png" },
        { id: 3, title: "Elegant Bedroom3", image: "interior/bedroom/img3.png" },
        { id: 4, title: "Elegant Bedroom4", image: "interior/bedroom/img4.png" },
    ],
    "kitchen": [
        { id: 1, title: "Contemporary Kitchen1", image: "interior/kitchen/img1.png" },
        { id: 2, title: "Contemporary Kitchen2", image: "interior/kitchen/img2.png" },
        { id: 3, title: "Contemporary Kitchen3", image: "interior/kitchen/img3.png" },
        { id: 4, title: "Contemporary Kitchen4", image: "interior/kitchen/img4.png" },
        { id: 5, title: "Contemporary Kitchen5", image: "interior/kitchen/img5.png" },
        { id: 6, title: "Contemporary Kitchen6", image: "interior/kitchen/img6.png" },
        { id: 7, title: "Contemporary Kitchen7", image: "interior/kitchen/img7.png" },
    ],
    "dining": [
        { id: 1, title: "Contemporary Kitchen1", image: "interior/dining/img1.png" },
        { id: 2, title: "Contemporary Kitchen2", image: "interior/dining/img2.png" },
        { id: 3, title: "Contemporary Kitchen3", image: "interior/dining/img3.png" },
        { id: 4, title: "Contemporary Kitchen4", image: "interior/dining/img4.png" },
        { id: 5, title: "Contemporary Kitchen5", image: "interior/dining/img5.png" },
    ],
};
