const arac = "VW";
const renk = "siyah";
const model = 2002;
const musteriYili = 4;

if (musteriYili >= 5) {
    console.log("Butun araclariniza bakim yapiir.")
} else if ((arac == "BMW") && (renk == "kirmizi") && (model < 2019) && (model > 2010)) {
    console.log("BMW markali araciniza makim yapilir")
} else if ((arac == "BMW") && (renk == "siyah") && (model >= 2020)) {
    console.log("BMW markali araciniza bakim yapilir")
} else if ((arac == "VW") && (model < 2018) && (model > 2001) && (renk == "siyah")) {
    console.log("VW markali araciniza bakim yapilir.")
} else if ((arac == "AUDI") && (renk == "siyah") || (renk == "kirmizi") && ((model < 2010 && model > 2005) || (model < 2020) && (model > 2014))) {
    console.log("AUDI markali araciniza bakim yapilir")
} else {
    console.log("Araciniza islem yapamiyoruz.")
}