const anchor = document.createElement('a');
anchor.href = 'https://minecraft.fandom.com/es/wiki/Tutoriales/Calendario?file=Calendario.png'; 
anchor.textContent = 'luna'; 
const biomesData = [
    {
        id: 1,
        name: "Badlands",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Heatran",
                sprite: "https://img.pokemondb.net/sprites/home/normal/heatran.png",
                time: "-",
                condition: "Subsuelo, superficie de lava, MAX Y=50"
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 2,
        name: "Badlands Plateau",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Heatran",
                sprite: "https://img.pokemondb.net/sprites/home/normal/heatran.png",
                time: "-",
                condition: "Subsuelo, superficie de lava, MAX Y=50"
            },
            {
                name: "Marshadow",
                sprite: "https://img.pokemondb.net/sprites/home/normal/marshadow.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 3,
        name: "Bamboo Jungle",
        pokemons: [
            {
                name: "Kubfu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kubfu.png",
                time: "Afternoon",
                condition: ""
            },
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 4,
        name: "Bamboo Jungle Hills",
        pokemons: [
            {
                name: "Kubfu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kubfu.png",
                time: "Afternoon",
                condition: ""
            },
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 5,
        name: "Beach",
        pokemons: [
            {
                name: "Suicune",
                sprite: "https://img.pokemondb.net/sprites/home/normal/suicune.png",
                time: "Night",
                condition: ""
            }

        ]
    },
    {
        id: 6,
        name: "Birch Forest",
        pokemons: [
            {
                name: "Mesprit",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mesprit.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Zacian",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zacian.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zamazenta",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zamazenta.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 7,
        name: "Birch Forest Hills",
        pokemons: [
            {
                name: "Mesprit",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mesprit.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Cobalion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/cobalion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Terrakion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/terrakion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Virizion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/virizion.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 8,
        name: "Dark Forest",
        pokemons: [
            {
                name: "Uxie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/uxie.png",
                time: "Afternoon",
                condition: "Superficie acuática."
            },
            {
                name: "Xerneas",
                sprite: "https://img.pokemondb.net/sprites/home/normal/xerneas.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Necrozma",
                sprite: "https://img.pokemondb.net/sprites/home/normal/necrozma.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Magearna",
                sprite: "https://img.pokemondb.net/sprites/home/normal/magearna.png",
                time: "Day",
                condition: "En  interiores cerrados, sobre piso de tablones de abedul."
            }
        ]
    },
    {
        id: 9,
        name: "Dark Forest Hills",
        pokemons: [
            {
                name: "Uxie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/uxie.png",
                time: "Afternoon",
                condition: "Superficie acuática."
            },
            {
                name: "Darkrai",
                sprite: "https://img.pokemondb.net/sprites/home/normal/darkrai.png",
                time: "Night",
                condition: "En <a href='https://media.discordapp.net/attachments/1117613048581062778/1336895109274275860/Calendario.png?ex=67a57818&is=67a42698&hm=4e1d72158376778d699f0cb7ca76e20e8fa325ec09d26ba95de919ad4c12bffc&=&format=webp&quality=lossless&width=800&height=320' target='_blank' class='text-blue-400 hover:underline'>luna nueva</a>"
            },
            {
                name: "Magearna",
                sprite: "https://img.pokemondb.net/sprites/home/normal/magearna.png",
                time: "Day",
                condition: "En  interiores cerrados, sobre piso de tablones de abedul."
            }
        ]
    },
    {
        id: 10,
        name: "Deep Cold Ocean",
        pokemons: [
            {
                name: "Kyogre",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyogre.png",
                time: "Night",
                condition: "Lluvia, MAX Y=45"
            }
        ]
    },
    {
        id: 11,
        name: "Deep Frozen Ocean",
        pokemons: [
            {
                name: "Kyogre",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyogre.png",
                time: "Night",
                condition: "Lluvia, MAX Y=45"
            }
        ]
    },
    {
        id: 12,
        name: "Deep Lukewarm Ocean",
        pokemons: [
            {
                name: "Kyogre",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyogre.png",
                time: "Night",
                condition: "Lluvia, MAX Y=45"
            },
            {
                name: "Manaphy",
                sprite: "https://img.pokemondb.net/sprites/home/normal/manaphy.png",
                time: "Morning",
                condition: "Cielo despejado."
            }
        ]
    },
    {
        id: 13,
        name: "Deep Ocean",
        pokemons: [
            {
                name: "Kyogre",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyogre.png",
                time: "Night",
                condition: "Lluvia, MAX Y=45"
            }
        ]
    },
    {
        id: 14,
        name: "Deep Warm Ocean",
        pokemons: [
            {
                name: "Kyogre",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyogre.png",
                time: "Night",
                condition: "Lluvia, MAX Y=45"
            }
        ]
    },
    {
        id: 15,
        name: "Desert",
        pokemons: [
            {
                name: "Registeel",
                sprite: "https://img.pokemondb.net/sprites/home/normal/registeel.png",
                time: "Dawn, Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Hoopa",
                sprite: "https://img.pokemondb.net/sprites/home/normal/hoopa.png",
                time: "Afternoon",
                condition: ""
            }
        ]
    },
    {
        id: 16,
        name: "Desert Hills",
        pokemons: [
            {
                name: "Registeel",
                sprite: "https://img.pokemondb.net/sprites/home/normal/registeel.png",
                time: "Dawn, Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Groudon",
                sprite: "https://img.pokemondb.net/sprites/home/normal/groudon.png",
                time: "Day",
                condition: "Cielo despejado."
            },
            {
                name: "Hoopa",
                sprite: "https://img.pokemondb.net/sprites/home/normal/hoopa.png",
                time: "Afternoon",
                condition: ""
            }
        ]
    },
    {
        id: 17,
        name: "Desert Lakes",
        pokemons: [
            {
                name: "Registeel",
                sprite: "https://img.pokemondb.net/sprites/home/normal/registeel.png",
                time: "Dawn, Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Uxie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/uxie.png",
                time: "Afternoon",
                condition: "Superficie acuática."
            },
            {
                name: "Mesprit",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mesprit.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Azelf",
                sprite: "https://img.pokemondb.net/sprites/home/normal/azelf.png",
                time: "Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Keldeo",
                sprite: "https://img.pokemondb.net/sprites/home/normal/keldeo.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Hoopa",
                sprite: "https://img.pokemondb.net/sprites/home/normal/hoopa.png",
                time: "Afternoon",
                condition: ""
            },
            {
                name: "Volcanion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/volcanion.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática."
            }
        ]
    },
    {
        id: 18,
        name: "Eroded Badlands",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 19,
        name: "Flower Forest",
        pokemons: [
            {
                name: "Azelf",
                sprite: "https://img.pokemondb.net/sprites/home/normal/azelf.png",
                time: "Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Shaymin",
                sprite: "https://img.pokemondb.net/sprites/home/normal/shaymin-land.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Meloetta",
                sprite: "https://img.pokemondb.net/sprites/home/normal/meloetta.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Enamorus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/enamorus.png",
                time: "Dawn, Dusk",
                condition: ""
            }
        ]
    },
    {
        id: 20,
        name: "Forest",
        pokemons: [
            {
                name: "Azelf",
                sprite: "https://img.pokemondb.net/sprites/home/normal/azelf.png",
                time: "Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Zacian",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zacian.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zamazenta",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zamazenta.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 21,
        name: "Frozen Ocean",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 22,
        name: "Frozen River",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 23,
        name: "Giant Spruce Taiga",
        pokemons: [
            {
                name: "Reshiram",
                sprite: "https://img.pokemondb.net/sprites/home/normal/reshiram.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zekrom",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zekrom.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 24,
        name: "Giant Spruce Taiga Hills",
        pokemons: [
            {
                name: "Reshiram",
                sprite: "https://img.pokemondb.net/sprites/home/normal/reshiram.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zekrom",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zekrom.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 25,
        name: "Giant Tree Taiga",
        pokemons: [
            {
                name: "Reshiram",
                sprite: "https://img.pokemondb.net/sprites/home/normal/reshiram.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zekrom",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zekrom.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 26,
        name: "Giant Tree Taiga Hills",
        pokemons: [
            {
                name: "Reshiram",
                sprite: "https://img.pokemondb.net/sprites/home/normal/reshiram.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zekrom",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zekrom.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 27,
        name: "Gravelly Mountains",
        pokemons: [
            {
                name: "Entei",
                sprite: "https://img.pokemondb.net/sprites/home/normal/entei.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Rayquaza",
                sprite: "https://img.pokemondb.net/sprites/home/normal/rayquaza.png",
                time: "Afternoon, Dusk",
                condition: ""
            },
            {
                name: "Jirachi",
                sprite: "https://img.pokemondb.net/sprites/home/normal/jirachi.png",
                time: "Dawn Morning",
                condition: ""
            },
            {
                name: "Genesect",
                sprite: "https://img.pokemondb.net/sprites/home/normal/genesect.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Diancie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/diancie.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            }
        ]
    },
    {
        id: 28,
        name: "Ice Spikes",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Kyurem",
                sprite: "https://img.pokemondb.net/sprites/home/normal/kyurem.png",
                time: "Afternoon, Dusk",
                condition: ""
            }
        ]
    },
    {
        id: 29,
        name: "Jungle",
        pokemons: [
            {
                name: "Tapu Koko",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tapu-koko.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Tapu Lele",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tapu-lele.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Tapu Bulu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tapu-bulu.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Tapu Fini",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tapu-fini.png",
                time: "Afternoon",
                condition: "Superficie acuática"
            },
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            },
        ]
    },
    {
        id: 30,
        name: "Jungle Edge",
        pokemons: [
            {
                name: "Type:Null",
                sprite: "https://img.pokemondb.net/sprites/home/normal/type-null.png",
                time: "Dusk, Night",
                condition: ""
            },
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 31,
        name: "Jungle Hills",
        pokemons: [
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 32,
        name: "Modified Badlands Plateau",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Heatran",
                sprite: "https://img.pokemondb.net/sprites/home/normal/heatran.png",
                time: "-",
                condition: "Subsuelo, superficie de lava, MAX Y=50"
            },
            {
                name: "Landorus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/landorus.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 33,
        name: "Modified Gravelly Mountains",
        pokemons: [
            {
                name: "Entei",
                sprite: "https://img.pokemondb.net/sprites/home/normal/entei.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Rayquaza",
                sprite: "https://img.pokemondb.net/sprites/home/normal/rayquaza.png",
                time: "Afternoon, Dusk",
                condition: ""
            },
            {
                name: "Diancie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/diancie.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            }
        ]
    },
    {
        id: 34,
        name: "Modified Jungle",
        pokemons: [
            {
                name: "Mew",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mew.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 35,
        name: "Modified Jungle Edge",
        pokemons: [
            {
                name: "Zarude",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zarude.png",
                time: "Night",
                condition: "Copa de los arboles."
            }
        ]
    },
    {
        id: 36,
        name: "Modified Wooded Badlands Plateau",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Heatran",
                sprite: "https://img.pokemondb.net/sprites/home/normal/heatran.png",
                time: "-",
                condition: "Subsuelo, superficie de lava, MAX Y=50"
            },
            {
                name: "Landorus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/landorus.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 37,
        name: "Mount Lanakila",
        pokemons: [
            {
                name: "Shaymin",
                sprite: "https://img.pokemondb.net/sprites/home/normal/shaymin-land.png",
                time: "Morning",
                condition: ""
            }
        ]
    },
    {
        id: 38,
        name: "Mountain Edge",
        pokemons: [
            {
                name: "Entei",
                sprite: "https://img.pokemondb.net/sprites/home/normal/entei.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Rayquaza",
                sprite: "https://img.pokemondb.net/sprites/home/normal/rayquaza.png",
                time: "Afternoon, Dusk",
                condition: ""
            },
            {
                name: "Diancie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/diancie.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            }
        ]
    },
    {
        id: 39,
        name: "Mountains",
        pokemons: [
            {
                name: "Entei",
                sprite: "https://img.pokemondb.net/sprites/home/normal/entei.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Rayquaza",
                sprite: "https://img.pokemondb.net/sprites/home/normal/rayquaza.png",
                time: "Afternoon, Dusk",
                condition: ""
            },
            {
                name: "Diancie",
                sprite: "https://img.pokemondb.net/sprites/home/normal/diancie.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            }
        ]
    },
    {
        id: 40,
        name: "Mushroom Field Shore",
        pokemons: [
            {
                name: "Suicune",
                sprite: "https://img.pokemondb.net/sprites/home/normal/suicune.png",
                time: "Night",
                condition: ""
            }
        ]
    },
    {
        id: 41,
        name: "Ocean",
        pokemons: [
            {
                name: "Latias",
                sprite: "https://img.pokemondb.net/sprites/home/normal/latias.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Latios",
                sprite: "https://img.pokemondb.net/sprites/home/normal/latios.png",
                time: "Afternoon",
                condition: ""
            }
        ]
    },
    {
        id: 42,
        name: "Plains",
        pokemons: [
            {
                name: "Tornadus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tornadus.png",
                time: "Afternoon",
                condition: "Lluvia"
            },
            {
                name: "Thundurus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/thundurus.png",
                time: "Morning",
                condition: "Lluvia"
            }
        ]
    },
    {
        id: 43,
        name: "River",
        pokemons: [
            {
                name: "Keldeo",
                sprite: "https://img.pokemondb.net/sprites/home/normal/keldeo.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 44,
        name: "Savanna",
        pokemons: [
            {
                name: "Raikou",
                sprite: "https://img.pokemondb.net/sprites/home/normal/raikou.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Regigigas",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regigigas.png",
                time: "Afternoon, Dusk",
                condition: "Subsuelo, MAX Y=40"
            },
            {
                name: "Victini",
                sprite: "https://img.pokemondb.net/sprites/home/normal/victini.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 45,
        name: "Savanna Plateau",
        pokemons: [
            {
                name: "Raikou",
                sprite: "https://img.pokemondb.net/sprites/home/normal/raikou.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Regigigas",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regigigas.png",
                time: "Afternoon, Dusk",
                condition: "Subsuelo, MAX Y=40"
            },
            {
                name: "Victini",
                sprite: "https://img.pokemondb.net/sprites/home/normal/victini.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Zeraora",
                sprite: "https://img.pokemondb.net/sprites/home/normal/zeraora.png",
                time: "Afternoon",
                condition: ""
            }
        ]
    },
    {
        id: 46,
        name: "Shattered Savanna",
        pokemons: [
            {
                name: "Raikou",
                sprite: "https://img.pokemondb.net/sprites/home/normal/raikou.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Regigigas",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regigigas.png",
                time: "Afternoon, Dusk",
                condition: "Subsuelo, MAX Y=40"
            },
            {
                name: "Victini",
                sprite: "https://img.pokemondb.net/sprites/home/normal/victini.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 47,
        name: "Shattered Savanna Plateau",
        pokemons: [
            {
                name: "Raikou",
                sprite: "https://img.pokemondb.net/sprites/home/normal/raikou.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Regigigas",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regigigas.png",
                time: "Afternoon, Dusk",
                condition: "Subsuelo, MAX Y=40"
            },
            {
                name: "Victini",
                sprite: "https://img.pokemondb.net/sprites/home/normal/victini.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 48,
        name: "Snowy Beach",
        pokemons: [
            {
                name: "Suicune",
                sprite: "https://img.pokemondb.net/sprites/home/normal/suicune.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 49,
        name: "Snowy Mountains",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Chien-Pao",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chien-pao.png",
                time: "Night",
                condition: "MIN Y=80"
            }
        ]
    },
    {
        id: 50,
        name: "Snowy Taiga",
        pokemons: [

            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Calyrex",
                sprite: "https://img.pokemondb.net/sprites/home/normal/calyrex.png",
                time: "Morning",
                condition: ""
            }
        ]
    },
    {
        id: 51,
        name: "Snowy Taiga hills",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Calyrex",
                sprite: "https://img.pokemondb.net/sprites/home/normal/calyrex.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Chien-Pao",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chien-pao.png",
                time: "Night",
                condition: "MIN Y=80"
            }
        ]
    },
    {
        id: 52,
        name: "Snowy Taiga Mountains",
        pokemons: [
            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Deoxys",
                sprite: "https://img.pokemondb.net/sprites/home/normal/deoxys.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Calyrex",
                sprite: "https://img.pokemondb.net/sprites/home/normal/calyrex.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Chien-Pao",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chien-pao.png",
                time: "Night",
                condition: "MIN Y=80"
            }
        ]
    },
    {
        id: 53,
        name: "Snowy Tundra",
        pokemons: [

            {
                name: "Regice",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regice.png",
                time: "Morning",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Glastrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/glastrier.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 54,
        name: "Stone Shore",
        pokemons: [

            {
                name: "Suicune",
                sprite: "https://img.pokemondb.net/sprites/home/normal/suicune.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 55,
        name: "Sunflower Plains",
        pokemons: [

            {
                name: "Shaymin",
                sprite: "https://img.pokemondb.net/sprites/home/normal/shaymin-land.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Tornadus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/tornadus.png",
                time: "Afternoon",
                condition: "Lluvia"
            },
            {
                name: "Thundurus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/thundurus.png",
                time: "Morning",
                condition: "Lluvia"
            },
            {
                name: "Meloetta",
                sprite: "https://img.pokemondb.net/sprites/home/normal/meloetta.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Cosmog",
                sprite: "https://img.pokemondb.net/sprites/home/normal/cosmog.png",
                time: "Dusk, Night",
                condition: ""
            },
            {
                name: "Enamorus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/enamorus.png",
                time: "Dawn, Dusk",
                condition: ""
            }
        ]
    },
    {
        id: 56,
        name: "Swamp",
        pokemons: [

            {
                name: "Eternatus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/eternatus.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Spectrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/spectrier.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Wo-Chien",
                sprite: "https://img.pokemondb.net/sprites/home/normal/wo-chien.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 57,
        name: "Swamp Hills",
        pokemons: [

            {
                name: "Eternatus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/eternatus.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Spectrier",
                sprite: "https://img.pokemondb.net/sprites/home/normal/spectrier.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Wo-Chien",
                sprite: "https://img.pokemondb.net/sprites/home/normal/wo-chien.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 58,
        name: "Taiga",
        pokemons: [

            {
                name: "Ting-Lu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/ting-lu.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 59,
        name: "Taiga Hills",
        pokemons: [

            {
                name: "Ting-Lu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/ting-lu.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 60,
        name: "Taiga Mountains",
        pokemons: [
            {
                name: "Yveltal",
                sprite: "https://img.pokemondb.net/sprites/home/normal/yveltal.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Ting-Lu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/ting-lu.png",
                time: "Night",
                condition: ""
            },
        ]
    },
    {
        id: 61,
        name: "Tall Birch Forest",
        pokemons: [
            {
                name: "Mesprit",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mesprit.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Cresselia",
                sprite: "https://img.pokemondb.net/sprites/home/normal/cresselia.png",
                time: "Night",
                condition: "En <a href='https://media.discordapp.net/attachments/1117613048581062778/1336895109274275860/Calendario.png?ex=67a57818&is=67a42698&hm=4e1d72158376778d699f0cb7ca76e20e8fa325ec09d26ba95de919ad4c12bffc&=&format=webp&quality=lossless&width=800&height=320' target='_blank' class='text-blue-400 hover:underline'>luna llena</a>"
            },
        ]
    },
    {
        id: 62,
        name: "Tall Birch Hills",
        pokemons: [
            {
                name: "Mesprit",
                sprite: "https://img.pokemondb.net/sprites/home/normal/mesprit.png",
                time: "Dawn, Morning",
                condition: "Superficie acuática"
            },
            {
                name: "Cobalion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/cobalion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Terrakion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/terrakion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Virizion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/virizion.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 63,
        name: "Warm Ocean",
        pokemons: [
            {
                name: "Latias",
                sprite: "https://img.pokemondb.net/sprites/home/normal/latias.png",
                time: "Morning",
                condition: ""
            },
            {
                name: "Latios",
                sprite: "https://img.pokemondb.net/sprites/home/normal/latios.png",
                time: "Afternoon",
                condition: ""
            },
            {
                name: "Manaphy",
                sprite: "https://img.pokemondb.net/sprites/home/normal/manaphy.png",
                time: "Morning",
                condition: "Cielo despejado."
            }
        ]
    },
    {
        id: 64,
        name: "Wooded Badlands Plateau",
        pokemons: [
            {
                name: "Regirock",
                sprite: "https://img.pokemondb.net/sprites/home/normal/regirock.png",
                time: "Afternoon",
                condition: "Subsuelo, MAX Y=50"
            },
            {
                name: "Heatran",
                sprite: "https://img.pokemondb.net/sprites/home/normal/heatran.png",
                time: "-",
                condition: "Subsuelo, superficie de lava, MAX Y=50"
            },
            {
                name: "Landorus",
                sprite: "https://img.pokemondb.net/sprites/home/normal/landorus.png",
                time: "Dawn, Morning",
                condition: ""
            },
            {
                name: "Chi-Yu",
                sprite: "https://img.pokemondb.net/sprites/home/normal/chi-yu.png",
                time: "Day",
                condition: "Superficie de lava, MIN Y=80"
            }
        ]
    },
    {
        id: 65,
        name: "Wooded Hills",
        pokemons: [
            {
                name: "Azelf",
                sprite: "https://img.pokemondb.net/sprites/home/normal/azelf.png",
                time: "Morning",
                condition: "Superficie acuática."
            },
            {
                name: "Cobalion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/cobalion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Terrakion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/terrakion.png",
                time: "Night",
                condition: ""
            },
            {
                name: "Virizion",
                sprite: "https://img.pokemondb.net/sprites/home/normal/virizion.png",
                time: "Day",
                condition: ""
            }
        ]
    },
    {
        id: 66,
        name: "Wooded Mountains",
        pokemons: [
            {
                name: "Entei",
                sprite: "https://img.pokemondb.net/sprites/home/normal/entei.png",
                time: "Day",
                condition: ""
            },
            {
                name: "Rayquaza",
                sprite: "https://img.pokemondb.net/sprites/home/normal/rayquaza.png",
                time: "Afternoon, Dusk",
                condition: ""
            },
            {
                name: "Genesect",
                sprite: "https://img.pokemondb.net/sprites/home/normal/genesect.png",
                time: "Night",
                condition: ""
            }
        ]
    },
];
