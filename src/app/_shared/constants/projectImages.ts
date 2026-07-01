import AcademyImage from "@/src/assets/images/projects/academy.png";
import DataraceImage from "@/src/assets/images/projects/datarace.png";
import LegalensImage from "@/src/assets/images/projects/legalens.png";
import NeyronImage from "@/src/assets/images/projects/neyron.png";
import AcademyLogo from "@/src/assets/images/projects/logo/academy.svg";
import DataraceLogo from "@/src/assets/images/projects/logo/datarace.svg";
import LegalensLogo from "@/src/assets/images/projects/logo/legalens.svg";
import NeyronLogo from "@/src/assets/images/projects/logo/neyron.svg";

interface ProjectImages{
  image: string;
  logo: string;
}


interface Project {
  [key: string]: ProjectImages;
}

export const projectImages: Project = {
  academy: {
    image: AcademyImage.src,
    logo: AcademyLogo.src,
  },
  datarace: {
    image: DataraceImage.src,
    logo: DataraceLogo.src,
  },
  legalens: {
    image: LegalensImage.src,
    logo: LegalensLogo.src,
  },
  neyron: {
    image: NeyronImage.src,
    logo: NeyronLogo.src,
  },
};