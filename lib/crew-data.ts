export interface CrewMember {
  name: string
  alias: string
  image: string
  slug: string
  rolePlayer: string
  streamLink?: string
  status: "Alive" | "Deceased"
  dateOfBirth: string
  age: number
  birthPlace: string
  nationality: string
  physicalAppearance: string
  hobbies: string
  phobias: string
  positiveTraits: string[]
  negativeTraits: string[]
  childhood: string
  familyLife: string
  education: string
  loveLife: string
  businessLife: string
  culture: string
  illegalCulture: string
  travelReason: string
  goals: string
}

export const crewMembers: CrewMember[] = [
  {
    name: "Yarram",
    alias: "REN",
    slug: "lorenzo",
    image: "/crew/lorenzo.jpg",
    rolePlayer: "Ren",
    streamLink: "Kick.com/ren",
    status: "Alive",
    dateOfBirth: "1995",
    age: 29,
    birthPlace: "Los Angeles, California",
    nationality: "USA",
    physicalAppearance: "Yarram stands at 1.85 meters tall and weighs 78 kg. He has a Mediterranean complexion with olive-toned skin, dark brown eyes, and black wavy hair that he often styles in a slicked-back manner. He has a distinctive scar on his left eyebrow from a childhood accident and several tattoos on his forearms depicting family symbols and dates.",
    hobbies: "Lorenzo's main hobbies include collecting vintage watches, participating in underground car meets, and studying Italian history. He has a passion for fine Italian cuisine and enjoys cooking traditional family recipes.",
    phobias: "He has a fear of heights and deep water, stemming from a traumatic incident during his teenage years.",
    positiveTraits: ["Loyal", "Protective", "Strategic thinker", "Charismatic"],
    negativeTraits: ["Impulsive", "Stubborn", "Quick to anger", "Distrustful of outsiders"],
    childhood: "Lorenzo grew up in a tight-knit Italian-American family in Los Angeles. His father worked as a mechanic while his mother ran a small family restaurant. He was the middle child of three siblings and learned early on the importance of family loyalty and respect.",
    familyLife: "Lorenzo maintains close relationships with his immediate family, especially his younger sister whom he fiercely protects. He visits his parents weekly and participates in all major family gatherings and traditions.",
    education: "He completed high school but chose not to pursue higher education, instead learning the family business and street skills from older relatives and neighborhood connections.",
    loveLife: "Currently single, Lorenzo has had several serious relationships but has struggled to maintain them due to his lifestyle and commitment to family business. He values honesty and loyalty in a partner above all else.",
    businessLife: "Lorenzo is involved in various legitimate and less legitimate business ventures, primarily focusing on car import/export and real estate investments. He has a reputation for being fair but firm in business dealings.",
    culture: "He strongly identifies with his Italian-American heritage and participates in cultural festivals and community events. He speaks Italian fluently and maintains traditional customs and values.",
    illegalCulture: "Lorenzo has connections to various underground networks and has been involved in activities that skirt the edges of legality, though he maintains a code of honor and never targets innocent civilians.",
    travelReason: "Lorenzo moved to Los Santos to expand his business operations and establish new connections in a city with more opportunities for growth and less scrutiny than his hometown.",
    goals: "His primary goals include establishing a legitimate car dealership, expanding his network of associates, and ensuring his family's financial security for generations to come."
  },
  {
    name: "Dante",
    alias: "HAKTAN",
    slug: "dante",
    image: "/crew/dante.jpg",
    rolePlayer: "Haktan",
    streamLink: "Kick.com/haktan",
    status: "Alive",
    dateOfBirth: "1997",
    age: 27,
    birthPlace: "Compton, California",
    nationality: "USA",
    physicalAppearance: "Dante is 1.82 meters tall and weighs 85 kg. He has a dark complexion with distinctive dreadlocks that he maintains meticulously. He has brown eyes and several tattoos including a large piece on his chest. He often wears a blue sweatshirt with 'TEDDY POP' branding.",
    hobbies: "Dante is passionate about street art and graffiti, music production, and underground rap battles. He spends his free time at local recording studios and skate parks.",
    phobias: "He has an intense fear of being trapped in small spaces and suffers from claustrophobia.",
    positiveTraits: ["Creative", "Street smart", "Loyal to friends", "Ambitious"],
    negativeTraits: ["Hot-headed", "Reckless", "Prone to violence", "Difficult to trust"],
    childhood: "Dante grew up in a challenging environment in Compton, where he learned to navigate the streets at an early age. He was raised primarily by his grandmother after his parents became involved in the criminal justice system.",
    familyLife: "He maintains a complex relationship with his family, feeling protective of his younger siblings but resentful toward absent parents. He visits his grandmother regularly and provides financial support when possible.",
    education: "Dante dropped out of high school in his junior year to help support his family. He is largely self-educated but has a natural intelligence and street wisdom.",
    loveLife: "He has had several casual relationships but struggles with commitment. He is currently not in a serious relationship but remains open to finding someone who understands his lifestyle.",
    businessLife: "Dante is involved in music production and has connections to various entertainment industry figures. He also manages some legitimate business fronts while maintaining underground connections.",
    culture: "He deeply identifies with West Coast hip-hop culture and urban street culture. He is involved in the local music scene and supports emerging artists.",
    illegalCulture: "Dante has been involved in various illegal activities since his youth, primarily related to street-level operations and protection. He maintains a reputation for being unpredictable but effective.",
    travelReason: "Dante came to Los Santos to pursue music industry opportunities and escape the cycle of violence in his hometown. He saw it as a fresh start.",
    goals: "His goals include establishing a legitimate record label, building a successful music career, and creating opportunities for young artists from similar backgrounds."
  },
  {
    name: "Tyrone",
    alias: "T1",
    slug: "tyrone",
    image: "/crew/tyrone.jpg",
    rolePlayer: "Mordred",
    streamLink: "Kick.com/mordredsly",
    status: "Alive",
    dateOfBirth: "1998",
    age: 26,
    birthPlace: "East Compton",
    nationality: "USA",
    physicalAppearance: "Tyrone weighs 83 kg and is 1.88 meters tall. He is a light-skinned African American with brown eyes and dark brown curly hair, often styled in braids or afro. He has stretch marks from childhood obesity and linear scars on his kneecaps from an injury at age 16. He often wears a black beanie and a black t-shirt with distinctive graphic designs.",
    hobbies: "His favorite activity is following Formula 1 races, heavily influenced by his father. He also enjoys street racing, car modifications, and spending time at local car meets.",
    phobias: "Tyrone has a fear of failure and disappointing those he cares about, which drives much of his ambition.",
    positiveTraits: ["Determined", "Resilient", "Family-oriented", "Hardworking"],
    negativeTraits: ["Prone to stress", "Overly competitive", "Sometimes reckless", "Can be withdrawn"],
    childhood: "Tyrone grew up in East Compton in a working-class family. He struggled with weight issues as a child but overcame them through determination and sports. His father was a mechanic who introduced him to the world of cars and racing.",
    familyLife: "He has a close relationship with his father, who serves as his primary role model. His relationship with his mother is more complex, and he has several siblings with varying levels of closeness.",
    education: "Tyrone completed high school and attended community college for automotive technology but dropped out to pursue racing opportunities and help support his family.",
    loveLife: "He has been in a few serious relationships but has struggled to balance his ambitions with commitment. He is currently single and focused on his career.",
    businessLife: "Tyrone is involved in the automotive industry, running a legitimate car repair shop while also participating in the underground racing scene. He has connections to various racing teams and sponsors.",
    culture: "He identifies strongly with African American culture and car culture, particularly the West Coast lowrider and street racing scenes. He participates in community events and car shows.",
    illegalCulture: "Tyrone has been involved in street racing and some related illegal activities, though he tries to keep his legitimate business separate from his underground connections.",
    travelReason: "He came to Los Santos to escape the limitations of his hometown and pursue greater opportunities in the racing and automotive worlds. The city offers more tracks, competitions, and business prospects.",
    goals: "His primary goals include establishing a successful racing team, opening a chain of automotive shops, and becoming a recognized figure in the racing community while maintaining his family connections."
  },
  {
    name: "Rian",
    alias: "RIAN",
    slug: "rian",
    image: "/crew/rian.jpg",
    rolePlayer: "Thet",
    streamLink: "Kick.com/thet",
    status: "Alive",
    dateOfBirth: "1996",
    age: 28,
    birthPlace: "Seattle, Washington",
    nationality: "USA",
    physicalAppearance: "Rian is 1.75 meters tall and weighs 65 kg. She has medium-length dark hair, often styled casually, and light brown eyes. She has a black beanie and grey hoodie as her signature style. She has several small tattoos on her wrists and a distinctive piercing on her left eyebrow.",
    hobbies: "Rian is passionate about technology, coding, and cybersecurity. She spends hours working on personal projects, participating in hackathons, and exploring underground tech communities.",
    phobias: "She has a fear of losing control and being manipulated, which stems from past experiences.",
    positiveTraits: ["Intelligent", "Independent", "Tech-savvy", "Resourceful"],
    negativeTraits: ["Socially awkward", "Paranoid", "Overly cautious", "Can be cold"],
    childhood: "Rian grew up in a middle-class family in Seattle, where she was always the odd one out. She was more interested in computers than socializing, which led to isolation during her school years.",
    familyLife: "She maintains a distant but respectful relationship with her parents, who never fully understood her interests. She has one older sibling with whom she has minimal contact.",
    education: "Rian excelled in school, particularly in mathematics and computer science. She attended university on scholarship but dropped out in her third year to pursue independent projects and freelance work.",
    loveLife: "Rian has had few romantic relationships, preferring independence. She finds it difficult to connect with others on an emotional level and values her personal space and freedom above all.",
    businessLife: "She works as a freelance cybersecurity consultant and has various tech-related side projects. She operates mostly in the gray areas of legality, using her skills for both legitimate and questionable purposes.",
    culture: "Rian identifies with tech culture and underground hacker communities. She participates in online forums and occasional in-person meetups with like-minded individuals.",
    illegalCulture: "She has been involved in various cyber activities that exist in legal gray zones, including information gathering and network security testing. She operates carefully to avoid serious legal trouble.",
    travelReason: "Rian came to Los Santos seeking anonymity and new opportunities. The city's tech scene and lack of oversight appealed to her desire for freedom and experimentation.",
    goals: "Her goals include establishing a legitimate cybersecurity firm, developing innovative software solutions, and maintaining her independence while building a reputation in the tech community."
  },
  {
    name: "Dave",
    alias: "DAVE",
    slug: "dave",
    image: "/crew/dave.jpg",
    rolePlayer: "Thet",
    streamLink: "Kick.com/thet",
    status: "Alive",
    dateOfBirth: "1994",
    age: 30,
    birthPlace: "Chicago, Illinois",
    nationality: "USA",
    physicalAppearance: "Dave is 1.90 meters tall and weighs 95 kg. He has a shaved head, dark skin, and a well-maintained beard. He has a muscular build and several tattoos covering his arms and chest. He often wears dark clothing and has a serious, intimidating presence.",
    hobbies: "Dave enjoys weightlifting, martial arts training, and watching classic action films. He also has an interest in vintage motorcycles and spends time restoring and customizing bikes.",
    phobias: "He has a fear of being vulnerable and showing weakness, which drives his intense focus on strength and self-reliance.",
    positiveTraits: ["Strong leader", "Protective", "Loyal", "Disciplined"],
    negativeTraits: ["Aggressive", "Stubborn", "Emotionally guarded", "Can be violent"],
    childhood: "Dave grew up in a tough neighborhood in Chicago where he learned to defend himself at an early age. He was raised by his single mother and several older cousins who taught him the value of strength and respect.",
    familyLife: "He has a complicated relationship with his family, feeling responsible for protecting them but also resenting the burden. He maintains contact but keeps emotional distance.",
    education: "Dave completed high school and attended community college briefly but left to pursue work opportunities. He values practical knowledge and street smarts over formal education.",
    loveLife: "He has had few serious relationships, finding it difficult to open up emotionally. He prefers casual relationships and maintains his independence.",
    businessLife: "Dave is involved in security and protection services, both legitimate and otherwise. He has connections to various organizations and operates as a freelance enforcer and consultant.",
    culture: "He identifies with urban street culture and values strength, respect, and loyalty. He participates in martial arts communities and motorcycle clubs.",
    illegalCulture: "Dave has been involved in various illegal activities throughout his life, primarily related to protection, enforcement, and underground operations. He maintains a reputation for being effective and uncompromising.",
    travelReason: "He came to Los Santos for better opportunities and to escape the cycle of violence in his hometown. The city offers more diverse criminal and legitimate opportunities.",
    goals: "His goals include establishing a legitimate security company, building a network of trusted associates, and creating a stable foundation for future generations."
  },
  {
    name: "Loud",
    alias: "LOUD",
    slug: "loud",
    image: "/crew/loud.jpg",
    rolePlayer: "Loud",
    streamLink: "Kick.com/loud",
    status: "Alive",
    dateOfBirth: "1999",
    age: 25,
    birthPlace: "Miami, Florida",
    nationality: "USA",
    physicalAppearance: "Loud is 1.78 meters tall and weighs 72 kg. He has dark hair, tan skin, and expressive brown eyes. He has a distinctive style with colorful clothing and accessories. He maintains a fit physique and has several visible tattoos on his arms and neck.",
    hobbies: "Loud is passionate about music, DJing, and nightlife culture. He spends most of his time at clubs, parties, and music events. He also enjoys photography and street fashion.",
    phobias: "He has a fear of being forgotten and falling into obscurity, which drives his need for attention and recognition.",
    positiveTraits: ["Energetic", "Social", "Creative", "Enthusiastic"],
    negativeTraits: ["Attention-seeking", "Impulsive", "Irresponsible", "Can be shallow"],
    childhood: "Loud grew up in Miami in a vibrant, multicultural environment. He was always the center of attention and learned early on how to use his charisma and energy to get what he wanted.",
    familyLife: "He has a distant relationship with his family, who struggled to understand his lifestyle choices. He maintains minimal contact but visits on major holidays.",
    education: "Loud completed high school but showed little interest in formal education. He learned everything he knows from experience and networking in the entertainment industry.",
    loveLife: "He has had many casual relationships and enjoys the freedom of single life. He struggles with commitment and prefers to keep things light and fun.",
    businessLife: "Loud is involved in the entertainment industry, working as a DJ, event promoter, and social media influencer. He has various business ventures related to nightlife and music.",
    culture: "He identifies strongly with nightlife culture, music culture, and social media culture. He is always connected and in the know about the latest trends and events.",
    illegalCulture: "Loud has been involved in various low-level illegal activities, primarily related to party drugs and event security. He tries to keep things relatively clean but isn't above bending rules.",
    travelReason: "He came to Los Santos for the vibrant nightlife and entertainment opportunities. The city offers more clubs, events, and social connections than his hometown.",
    goals: "His goals include becoming a renowned DJ, establishing a successful event promotion company, and building a personal brand that extends beyond the city."
  },
  {
    name: "Marcus",
    alias: "MARCUS",
    slug: "marcus",
    image: "/crew/marcus.jpg",
    rolePlayer: "Marcus",
    streamLink: "Kick.com/marcus",
    status: "Alive",
    dateOfBirth: "1993",
    age: 31,
    birthPlace: "Detroit, Michigan",
    nationality: "USA",
    physicalAppearance: "Marcus is 1.86 meters tall and weighs 88 kg. He has a dark complexion, short black hair, and intense brown eyes. He has a muscular build and several prominent tattoos. He maintains a professional appearance when needed but prefers casual street wear.",
    hobbies: "Marcus enjoys strategy games, reading about history and politics, and participating in debate clubs. He also has an interest in firearms and tactical training.",
    phobias: "He has a fear of powerlessness and being controlled by others, which drives his desire for influence and control.",
    positiveTraits: ["Strategic", "Analytical", "Ambitious", "Confident"],
    negativeTraits: ["Manipulative", "Cold", "Ruthless", "Can be arrogant"],
    childhood: "Marcus grew up in Detroit in a family that struggled financially. He learned early on that intelligence and strategy were his path to success, and he excelled in school and extracurricular activities.",
    familyLife: "He maintains a professional relationship with his family, providing financial support but keeping emotional distance. He values independence and self-reliance.",
    education: "Marcus completed high school at the top of his class and attended university on scholarship, studying business and political science. He left before completing his degree to pursue opportunities.",
    loveLife: "He has had several relationships but prioritizes his goals and ambitions over romantic connections. He is currently single and focused on building his empire.",
    businessLife: "Marcus is involved in various legitimate and illegitimate business ventures, primarily focusing on real estate, finance, and strategic consulting. He has a reputation for being effective and ruthless.",
    culture: "He identifies with power culture and elite social circles. He participates in networking events and maintains connections with influential individuals.",
    illegalCulture: "Marcus has been involved in various illegal activities, primarily related to financial crimes and strategic operations. He maintains a clean public image while operating in the shadows.",
    travelReason: "He came to Los Santos to establish a power base and expand his influence. The city offers more opportunities for strategic growth and less oversight than his hometown.",
    goals: "His goals include building a business empire, establishing political connections, and creating a legacy of power and influence that extends beyond the city."
  },
  {
    name: "Jax",
    alias: "JAX",
    slug: "jax",
    image: "/crew/jax.jpg",
    rolePlayer: "Jax",
    streamLink: "Kick.com/jax",
    status: "Alive",
    dateOfBirth: "2000",
    age: 24,
    birthPlace: "Phoenix, Arizona",
    nationality: "USA",
    physicalAppearance: "Jax is 1.80 meters tall and weighs 75 kg. He has light brown hair, green eyes, and a lean, athletic build. He has several tattoos including a distinctive design on his left arm. He often wears casual street wear and maintains a laid-back appearance.",
    hobbies: "Jax enjoys skateboarding, surfing, and extreme sports. He spends most of his free time outdoors and is always looking for the next adrenaline rush.",
    phobias: "He has a fear of boredom and stagnation, which drives his constant need for excitement and new experiences.",
    positiveTraits: ["Adventurous", "Easy-going", "Loyal", "Optimistic"],
    negativeTraits: ["Reckless", "Irresponsible", "Can be naive", "Poor planning"],
    childhood: "Jax grew up in Phoenix in a middle-class family. He was always the adventurous one, getting into trouble and seeking out new experiences. His parents struggled to keep him grounded.",
    familyLife: "He maintains a good relationship with his family, especially his younger siblings whom he adores. He visits regularly but struggles with settling down.",
    education: "Jax completed high school but had no interest in higher education. He learned everything through experience and hands-on learning, preferring practical knowledge over theory.",
    loveLife: "He has had several relationships but struggles with commitment. He prefers casual connections and enjoys the freedom of single life.",
    businessLife: "Jax is involved in various legitimate and questionable business ventures, primarily related to extreme sports, entertainment, and adventure tourism. He operates with a carefree attitude.",
    culture: "He identifies with extreme sports culture, surf culture, and the laid-back West Coast lifestyle. He participates in competitions and community events.",
    illegalCulture: "Jax has been involved in various low-level illegal activities, primarily related to extreme sports and entertainment. He doesn't take things too seriously and tries to keep things relatively clean.",
    travelReason: "He came to Los Santos for the adventure and opportunities. The city offers more excitement, events, and connections than his hometown.",
    goals: "His goals include establishing a successful extreme sports business, building a personal brand, and creating a life full of adventure and excitement while maintaining his freedom and independence."
  }
]

export function getCrewMemberBySlug(slug: string): CrewMember | undefined {
  return crewMembers.find(member => member.slug === slug)
}

export function getAllCrewSlugs(): string[] {
  return crewMembers.map(member => member.slug)
}

