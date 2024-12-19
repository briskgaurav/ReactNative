import { ImageSourcePropType } from "react-native";

interface Destination {
    Image: ImageSourcePropType;  
    WeatheName: string;
  }
interface DestinationInterface2 {
    id:number;
    Name:string;
    describe:string;
    Image: ImageSourcePropType;
    Temperature:String;
    rate: string;
    Days: string;
    Distance: string;
  }
  
export const DestinationType:Destination[] = [
    {
        Image: require('../assets/images/Todaji Temple.jpg'),
        WeatheName: "Ocean",
    },
    {
        Image: require('../assets/images/home.jpg'),
        WeatheName: "Mountain",
    },
    {
        Image: require('../assets/images/IslandShrine.jpg'),
        WeatheName: "Camp",
    },
    {
        Image: require('../assets/images/Osaka Temple.jpg'),
        WeatheName: "Sunset",
    },
    {
        Image: require('../assets/images/Todaji Temple.jpg'),
        WeatheName: "Hiking",
    },
    {
        Image: require('../assets/images/Ocean.jpg'),
        WeatheName: "Beach",
    },
    {
        Image: require('../assets/images/Mountains.jpg'),
        WeatheName: "Forest",
    },
]

export const sortCategory:string[] = ["All", "Popular", "Recommended", "More"]

export const suggestions:DestinationInterface2[] =[
    {
        id:1,
        Name:"Osaka Castle",
        describe: "loremt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        Image: require('../assets/images/Osaka Temple.jpg'),
        Temperature:"34 C",
        rate: "$1800",
        Days: "7 Days",
        Distance: "550 KM"
    },
    {
        id:2,
        Name:"Island Itkushima Shrine",
        describe: "loremt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        Image: require('../assets/images/IslandShrine.jpg'),
        Temperature:"30 C",
        rate: "$1200",
        Days: "5 Days",
        Distance: "200 KM"
    },
    {
        id:3,
        Name:"Todaji Temple",
        describe: "loremt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        Image: require('../assets/images/Todaji Temple.jpg'),
        Temperature:"32 C",
        rate: "$2000",
        Days: "2 Days",
        Distance: "700 KM"
    },
    {
        id:4,
        Name:"Babusar Top",
        describe: "loremt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        Image: require('../assets/images/Ocean.jpg'),
        Temperature:"31 C",
        rate: "$1500",
        Days: "6 Days",
        Distance: "600 KM"
    }
]

