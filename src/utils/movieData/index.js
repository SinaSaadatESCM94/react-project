/**
 * movieData object Sample
 * @param {string} id:`${count++}`
 * @param {string} imgCoverLink: ""
 * @param {string} title: ""
 * @param {string} briefStory: ``
 * @param {string} publishYear: ""
 * @param {string} imdbLink: ""
 * @param {object} ratings: {
 * @param {string} imdb: "",
 * @param {string} rottenTomatoes: "", }
 */
let count = 1; //count is defined to give each object an specific id
export const MovieData = [
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_4.jpg",
    title: "iron man",
    briefStory:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    publishYear: "2008",
    imdbLink: "https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "7.9",
      rottenTomatoes: "84%",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
    title: "The Incredible Hulk",
    briefStory:
      "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    publishYear: "2008",
    imdbLink: "https://www.imdb.com/title/tt0800080/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "6.6",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
    title: "iron man2",
    briefStory:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    publishYear: "2010",
    imdbLink: "imdb.com/title/tt1228705/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "6.9",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
    title: "thor1",
    briefStory:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    publishYear: "2011",
    imdbLink: "https://www.imdb.com/title/tt0800369/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "7.0",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg",
    title: "Captain America: The First Avenger",
    briefStory: `Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.`,
    publishYear: "2011",
    imdbLink: "https://www.imdb.com/title/tt0458339/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "6.9",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
    title: "the avengers",
    briefStory:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    publishYear: "2012",
    imdbLink: "https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "8.0",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg",
    title: "iron man3",
    briefStory:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    publishYear: "2013",
    imdbLink: "https://www.imdb.com/title/tt1300854/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "7.1",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorthedarkworld_lob_crd_02_1.jpg",
    title: "Thor: The Dark World",
    briefStory:
      "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
    publishYear: "2013",
    imdbLink: "https://www.imdb.com/title/tt1981115/?ref_=fn_al_tt_4",
    ratings: {
      imdb: "6.8",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
    title: "Captain America: The Winter Soldier",
    briefStory:
      "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    publishYear: "2014",
    imdbLink: "https://www.imdb.com/title/tt1843866/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "7.7",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg",
    title: "Guardians of the Galaxy",
    briefStory:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    publishYear: "2014",
    imdbLink: "https://www.imdb.com/title/tt2015381/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "8.0",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersageofultron_lob_crd_03.jpg",
    title: "Avengers: Age of Ultron",
    briefStory:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    publishYear: "2015",
    imdbLink: "https://www.imdb.com/title/tt2395427/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "7.3",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
    title: "Ant-Man",
    briefStory:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
    publishYear: "2015",
    imdbLink: "https://www.imdb.com/title/tt0478970/?ref_=fn_al_tt_1",
    ratings: {
      imdb: "7.3",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg",
    title: "Captain America: Civil War",
    briefStory:
      "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    publishYear: "2016",
    imdbLink: "https://www.imdb.com/title/tt3498820/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "7.8",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_6.jpg",
    title: "Doctor Strange",
    briefStory:
      "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    publishYear: "2016",
    imdbLink: "https://www.imdb.com/title/tt1211837/?ref_=nv_sr_srsg_3",
    ratings: {
      imdb: "7.5",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
    title: "Guardians of the Galaxy Vol. 2",
    briefStory:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    publishYear: "2017",
    imdbLink: "https://www.imdb.com/title/tt3896198/?ref_=nv_sr_srsg_3",
    ratings: {
      imdb: "7.6",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
    title: "Spider-Man: Homecoming",
    briefStory:
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    publishYear: "2017",
    imdbLink: "https://www.imdb.com/title/tt2250912/?ref_=nv_sr_srsg_3",
    ratings: {
      imdb: "7.4",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg",
    title: "Thor: Ragnarok",
    briefStory:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    publishYear: "2017",
    imdbLink: "https://www.imdb.com/title/tt3501632/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "7.9",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg",
    title: "Black Panther",
    briefStory:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    publishYear: "2018",
    imdbLink: "https://www.imdb.com/title/tt1825683/?ref_=nv_sr_srsg_1",
    ratings: {
      imdb: "7.3",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg",
    title: "Avengers: Infinity War",
    briefStory: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
    publishYear: "2018",
    imdbLink: "https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "8.4",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg",
    title: "Ant-Man and the Wasp",
    briefStory: `As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.`,
    publishYear: "2018",
    imdbLink: "https://www.imdb.com/title/tt5095030/?ref_=nv_sr_srsg_3",
    ratings: {
      imdb: "7.0",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
    title: "Captain Marvel",
    briefStory: `Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.`,
    publishYear: "2019",
    imdbLink: "https://www.imdb.com/title/tt4154664/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "6.8",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
    title: "Avengers: Endgame",
    briefStory: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
    `,
    publishYear: "2019",
    imdbLink: "https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "8.4",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
    title: "Spider-Man: Far from Home",
    briefStory: `Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.`,
    publishYear: "2019",
    imdbLink: "https://www.imdb.com/title/tt6320628/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "7.4",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
    title: "Black Widow",
    briefStory: `Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.`,
    publishYear: "2021",
    imdbLink: "https://www.imdb.com/title/tt3480822/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "6.7",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
    title: "Shang-Chi and the Legend of the Ten Rings",
    briefStory: `Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.`,
    publishYear: "2021",
    imdbLink: "https://www.imdb.com/title/tt9376612/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "7.5",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg",
    title: "Eternals",
    briefStory: `The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.`,
    publishYear: "2021",
    imdbLink: "https://www.imdb.com/title/tt9032400/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "6.5",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
    title: "Spider-Man: No Way Home",
    briefStory: `With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.`,
    publishYear: "2021",
    imdbLink: "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "8.7",
      rottenTomatoes: "",
    },
  },
  {
    id: `${count++}`,
    imgCoverLink:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_01.jpg",
    title: "Doctor Strange in the Multiverse of Madness",
    briefStory: `Dr. Stephen Strange casts a forbidden spell that opens the door to the multiverse, including an alternate version of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.`,
    publishYear: "2022",
    imdbLink: "https://www.imdb.com/title/tt9419884/?ref_=nv_sr_srsg_0",
    ratings: {
      imdb: "",
      rottenTomatoes: "",
    },
  },
];
