import {
  Book,
  Lightbulb,
  Rocket,
  SparklesIcon,
  Users,
  LucideIcon,
} from "lucide-react";

import image1 from "@/src/assets/images/ai-lab-sayt.svg";
import image2 from "@/src/assets/images/ai-lab-sayt.svg";
import image3 from "@/src/assets/images/ai-lab-sayt.svg";

export interface Card<T = LucideIcon | string> {
  title: string;
  description: string;
  image: T;
}

export const aiLabCards: Card<string>[] = [
  {
    title: "Süni İntellekt tədqiqatları",
    description:
      "Süni intellekt alqoritmləri, maşın öyrənməsi və təbii dil emalı üzrə qabaqcıl tədqiqatlar aparırıq.",
    image: image1,
  },
  {
    title: "Süni intellekt əsaslı layihələr",
    description:
      "Süni intellekt əsaslı layihələrin yaradılması və inkişafını təmin edirik.",
    image: image2,
  },
  {
    title: "Süni İntellekt tədris proqramı",
    description:
      "Süni intellektin dərinliklərinə qədər anlayışları özündə birləşdirən tədris proqramları təklif edir, kadrlar yetişdiririk.",
    image: image3,
  },
];

export const valuesCards: Card[] = [
  {
    title: "İnnovasiya",
    description: "Dövrün sərhədlərini aşır, yeni ideyalar təqdim edirik.",
    image: Lightbulb,
  },
  {
    title: "Sürət",
    description: "Qətiyyətlə hərəkət edir, sürətlə inkişaf edirik.",
    image: Rocket,
  },
  {
    title: "Daimi öyrənmə",
    description: "Öyrənir, yaradır və bunu davamlı olaraq təkrarlayırıq",
    image: Book,
  },
  {
    title: "Komanda işi",
    description: "Birgə çalışır və hər zaman bir-birimizə hörmətlə yanaşırıq.",
    image: Users,
  },
  {
    title: "Təsir",
    description:
      "Uğurlu nəticələr əldə edir və müasir gələcəyə təsir göstəririk.",
    image: SparklesIcon,
  },
];
