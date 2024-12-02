type Category = "steel ralling" | "furniture" | "windows";

type Project = {
    id: number;
    title: string;
    image: string;
};

export const projects: Record<Category, Project[]> = {
    "steel ralling": [
        { id: 1, title: "steel ralling 1", image: "material/steel ralling/img1.png" },
        { id: 2, title: "steel ralling 2", image: "material/steel ralling/img2.png" },
        { id: 3, title: "steel ralling 3", image: "material/steel ralling/img3.png" },
        { id: 4, title: "steel ralling 4", image: "material/steel ralling/img4.png" },
        { id: 5, title: "steel ralling 5", image: "material/steel ralling/img5.png" },
        { id: 6, title: "steel ralling 6", image: "material/steel ralling/img6.png" },
    ],
    "furniture": [
        { id: 1, title: "furniture 1", image: "material/furniture/img1.png" },
        { id: 2, title: "furniture 2", image: "material/furniture/img2.png" },
        { id: 3, title: "furniture 3", image: "material/furniture/img3.png" },
    ],
    "windows": [
        { id: 1, title: "windows 1", image: "material/windows/img1.jpg" },
        { id: 2, title: "windows 2", image: "material/windows/img2.jpg" },
        { id: 3, title: "windows 3", image: "material/windows/img3.jpg" },
        { id: 4, title: "windows 4", image: "material/windows/img4.jpg" },
        { id: 5, title: "windows 5", image: "material/windows/img5.jpg" },
        { id: 6, title: "windows 6", image: "material/windows/img6.jpg" },
        { id: 7, title: "windows 7", image: "material/windows/img7.jpg" },
        { id: 8, title: "windows 8", image: "material/windows/img8.jpg" },
        { id: 9, title: "windows 9", image: "material/windows/img9.jpg" },
        { id: 10, title: "windows 10", image: "material/windows/img10.jpg" },
        { id: 11, title: "windows 11", image: "material/windows/img11.jpg" },
    ],
};
