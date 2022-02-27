import { Csapat, Korosztaj, Ors, Raj } from "./csapat"

export const CSAPATOK = [
    new Csapat(
        "Montreal",
        [
            new Raj(
                "Katicabogár",
                Korosztaj.KIS_CSERKESZ,
                [
                    new Ors("Bagoly", "🦉"),
                    new Ors("Méhecske", "🐝"),
                ],
            ),
            new Raj(
                "Munkács",
                Korosztaj.CSERKESZ,
                [
                    new Ors("Ibolya", "🌸"),
                    new Ors("Páva", "🦚"),
                ],
            ),
            new Raj(
                "Besztercebánya",
                Korosztaj.CSERKESZ,
                [
                    new Ors("Róka", "🦊"),
                    new Ors("Kígyó", "🐍"),
                ],
            ),
        ],
    )
]
