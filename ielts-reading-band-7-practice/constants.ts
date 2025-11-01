
import { Passage, QuestionType } from './types';

export const IELTS_DATA: Passage[] = [
  {
    id: 1,
    title: "The Role of Automation in the Workplace",
    text: "The relentless march of technology has consistently reshaped the human workforce. From the Industrial Revolution's steam engines to the digital age's computers, innovation has always been a double-edged sword, creating new efficiencies while displacing old jobs. Today, the conversation is dominated by automation and artificial intelligence (AI). A recent study from the McKinsey Global Institute suggests that by 2030, as many as 800 million jobs could be displaced by automation. However, the same report posits that new job creation will also be significant, though it will require massive workforce retraining. The key challenge is not a scarcity of jobs, but a scarcity of skills. Jobs of the future will demand higher cognitive skills, such as creativity, critical thinking, and complex problem-solving, areas where humans still hold a considerable advantage over machines. Furthermore, roles requiring high emotional intelligence, like nursing, social work, and teaching, are also less susceptible to automation.",
    questions: [
      { id: 1, questionText: "According to the McKinsey Global Institute report, what is the primary challenge posed by automation?", type: QuestionType.MULTIPLE_CHOICE, options: ["A scarcity of jobs", "A scarcity of skills", "The high cost of AI", "The slow pace of innovation"] },
      { id: 2, questionText: "Jobs requiring high emotional intelligence are less likely to be ____.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "By which year could 800 million jobs be displaced?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 },
      { id: 4, questionText: "Name one cognitive skill where humans have an advantage over machines.", type: QuestionType.SHORT_ANSWER, wordLimit: 2 }
    ],
    answers: [
      { questionId: 1, answer: "A scarcity of skills" },
      { questionId: 2, answer: "automated" },
      { questionId: 3, answer: "2030" },
      { questionId: 4, answer: "creativity" }
    ]
  },
  {
    id: 2,
    title: "Urban Beekeeping and Biodiversity",
    text: "Once a purely rural pursuit, beekeeping is now thriving in urban landscapes. From London to Tokyo, rooftop hives are becoming a common sight. This trend is driven by a growing awareness of the critical role bees play in pollination and concerns about their declining populations worldwide, a phenomenon known as Colony Collapse Disorder. Urban beekeeping provides a sanctuary for bees, away from the pesticides often used in industrial agriculture. Furthermore, cities offer a surprising diversity of flora. Parks, gardens, and even window boxes provide a year-round succession of flowers, which can lead to more complex and flavorful honey than that from rural, monoculture farms. However, urban beekeeping is not without its challenges. Novice beekeepers must be properly trained to manage hives and prevent swarming. Additionally, a high density of hives in a small area can put pressure on local resources, potentially harming native pollinator populations.",
    questions: [
      { id: 1, questionText: "The decline in bee populations is known as [BLANK] Disorder.", type: QuestionType.GAP_FILLING },
      { id: 2, questionText: "What is a primary benefit of urban environments for bees mentioned in the text?", type: QuestionType.SHORT_ANSWER, wordLimit: 3 },
      { id: 3, questionText: "What is a potential negative consequence of too many hives in a city?", type: QuestionType.MULTIPLE_CHOICE, options: ["Increased honey prices", "Pressure on local resources", "Lack of trained beekeepers", "Reduced flower diversity"] },
      { id: 4, questionText: "Urban honey can be more complex due to a diversity of ____.", type: QuestionType.GAP_FILLING }
    ],
    answers: [
      { questionId: 1, answer: "Colony Collapse" },
      { questionId: 2, answer: "diversity of flora" },
      { questionId: 3, answer: "Pressure on local resources" },
      { questionId: 4, answer: "flora" }
    ]
  },
  // ... Adding more passages for a complete test
  {
    id: 3,
    title: "The Psychology of Color in Marketing",
    text: "Color is a powerful tool in a marketer's arsenal, capable of influencing mood, perception, and even purchasing decisions. This field, known as color psychology, suggests that certain colors evoke specific emotional responses. For instance, blue is often associated with trust, dependability, and calm, making it a popular choice for financial institutions and tech companies. Red, on the other hand, conveys energy, passion, and urgency, frequently used for clearance sales or to grab attention. However, these associations are not universal and can be heavily influenced by cultural context. In Western cultures, white symbolizes purity and is common at weddings, whereas in some Eastern cultures, it is the color of mourning. Therefore, international brands must conduct thorough research to avoid cultural missteps. The effectiveness of a color also depends on its appropriateness for the product being sold; a green-colored tech gadget might seem innovative and eco-friendly, but the same color for a luxury watch might be perceived as cheap.",
    questions: [
      { id: 1, questionText: "Which color is often used to create a sense of urgency?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 },
      { id: 2, questionText: "The meaning of a color can vary significantly based on [BLANK].", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "Why do financial institutions often use the color blue?", type: QuestionType.MULTIPLE_CHOICE, options: ["It is associated with wealth", "It is calming and trustworthy", "It is an energetic color", "It is universally liked"] },
      { id: 4, questionText: "In some Eastern cultures, what does the color white represent?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 }
    ],
    answers: [
      { questionId: 1, answer: "red" },
      { questionId: 2, answer: "cultural context" },
      { questionId: 3, answer: "It is calming and trustworthy" },
      { questionId: 4, answer: "mourning" }
    ]
  },
  {
    id: 4,
    title: "The History of the Silk Road",
    text: "The Silk Road was not a single highway but a vast network of trade routes connecting the East and West for more than 1,500 years. Its name, coined in the 19th century by German geographer Ferdinand von Richthofen, is somewhat misleading, as silk was only one of many commodities traded. Spices, precious metals, paper, and gunpowder flowed from East to West, while wool, glass, and gold travelled in the opposite direction. More than just a conduit for goods, the Silk Road was a vital channel for the exchange of ideas, technologies, religions, and even diseases. Buddhism spread from India to China along these routes, and innovations like papermaking and gunpowder technology were introduced to the West. The decline of the Silk Road began in the mid-15th century with the rise of the Ottoman Empire, which severed the link between Europe and Asia, and the simultaneous development of maritime trade routes that proved faster and more economical.",
    questions: [
      { id: 1, questionText: "Besides goods, what was exchanged along the Silk Road?", type: QuestionType.SHORT_ANSWER, wordLimit: 3 },
      { id: 2, questionText: "The name 'Silk Road' was created by a German ____.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "What was a major reason for the decline of the Silk Road?", type: QuestionType.MULTIPLE_CHOICE, options: ["The invention of the railroad", "A lack of valuable goods", "The rise of maritime trade", "A war between India and China"] },
      { id: 4, questionText: "What religion spread from India to China via the trade network?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 }
    ],
    answers: [
      { questionId: 1, answer: "ideas and technologies" },
      { questionId: 2, answer: "geographer" },
      { questionId: 3, answer: "The rise of maritime trade" },
      { questionId: 4, answer: "Buddhism" }
    ]
  },
  {
    id: 5,
    title: "The Benefits of Bilingualism",
    text: "For decades, it was believed that raising a child bilingually could cause confusion and developmental delays. However, modern research has overwhelmingly debunked these myths, revealing a host of cognitive benefits associated with speaking more than one language. Bilingual individuals often demonstrate enhanced executive function, a set of mental skills that includes problem-solving, switching between tasks, and focusing. This cognitive advantage is thought to stem from the brain's constant need to manage two languages and suppress the one that is not in use. Studies using neuroimaging have shown that bilingual brains have greater density in areas associated with language, memory, and attention. Furthermore, research suggests that lifelong bilingualism may help delay the onset of dementia and other age-related cognitive decline by building up a 'cognitive reserve'. This reserve allows the brain to better cope with the neuropathological damage that occurs in old age.",
    questions: [
      { id: 1, questionText: "The brain's ability to manage two languages enhances its ____ function.", type: QuestionType.GAP_FILLING },
      { id: 2, questionText: "What is a long-term health benefit of bilingualism mentioned in the passage?", type: QuestionType.SHORT_ANSWER, wordLimit: 3 },
      { id: 3, questionText: "The idea that bilingualism caused confusion is now considered a ____.", type: QuestionType.GAP_FILLING },
      { id: 4, questionText: "What does 'cognitive reserve' help the brain to do?", type: QuestionType.MULTIPLE_CHOICE, options: ["Learn new languages faster", "Improve short-term memory", "Cope with neuropathological damage", "Increase emotional intelligence"] }
    ],
    answers: [
      { questionId: 1, answer: "executive" },
      { questionId: 2, answer: "delay onset of dementia" },
      { questionId: 3, answer: "myth" },
      { questionId: 4, answer: "Cope with neuropathological damage" }
    ]
  },
  {
    id: 6,
    title: "The Phenomenon of Biomimicry",
    text: "Biomimicry is an innovative approach that seeks sustainable solutions to human challenges by emulating nature's time-tested patterns and strategies. The core idea is that nature, after 3.8 billion years of evolution, has already solved many of the problems we are grappling with. For example, the design of the Japanese Shinkansen bullet train's nose was inspired by the beak of a kingfisher. This design not only reduced noise pollution but also allowed the train to travel 10% faster using 15% less electricity. In another instance, engineers studied the self-cooling properties of termite mounds to design energy-efficient buildings. These mounds maintain a stable internal temperature despite extreme external fluctuations. By mimicking these natural designs, we can create products and systems that are more efficient, resilient, and harmonious with the environment. It represents a paradigm shift from 'what can we extract from nature' to 'what can we learn from it'.",
    questions: [
      { id: 1, questionText: "What natural structure inspired the design of energy-efficient buildings?", type: QuestionType.SHORT_ANSWER, wordLimit: 2 },
      { id: 2, questionText: "Biomimicry is an approach that emulates ____ patterns and strategies.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "The design of the bullet train was inspired by a bird's ____.", type: QuestionType.GAP_FILLING },
      { id: 4, questionText: "What was a key benefit of the bullet train's redesigned nose?", type: QuestionType.MULTIPLE_CHOICE, options: ["It was cheaper to build", "It reduced noise pollution", "It could carry more passengers", "It was more aerodynamic in tunnels"] }
    ],
    answers: [
      { questionId: 1, answer: "termite mounds" },
      { questionId: 2, answer: "nature's" },
      { questionId: 3, answer: "beak" },
      { questionId: 4, answer: "It reduced noise pollution" }
    ]
  },
  {
    id: 7,
    title: "The Great Barrier Reef Under Threat",
    text: "Stretching for over 2,300 kilometers off the coast of Australia, the Great Barrier Reef is the world's largest coral reef system and a marvel of biodiversity. It is composed of over 2,900 individual reefs and 900 islands. However, this natural wonder is facing an unprecedented crisis due to climate change. The primary threat is coral bleaching, a process where corals expel the symbiotic algae living in their tissues, causing them to turn completely white. This is triggered by rising ocean temperatures. While corals can recover from bleaching if temperatures return to normal, prolonged or frequent events can lead to mass mortality. In addition to warming waters, ocean acidification—caused by the absorption of excess carbon dioxide from the atmosphere—hampers the corals' ability to build their skeletons. Local threats, such as pollution from agricultural runoff and overfishing, further compound these global pressures, putting the entire ecosystem at risk.",
    questions: [
      { id: 1, questionText: "What is the main cause of coral bleaching?", type: QuestionType.SHORT_ANSWER, wordLimit: 3 },
      { id: 2, questionText: "Coral bleaching occurs when corals expel the symbiotic ____ in their tissues.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "What is the world's largest coral reef system?", type: QuestionType.SHORT_ANSWER, wordLimit: 4 },
      { id: 4, questionText: "Besides rising temperatures, what other global threat does the reef face?", type: QuestionType.MULTIPLE_CHOICE, options: ["Tsunamis", "Ocean acidification", "Invasive fish species", "Coastal development"] }
    ],
    answers: [
      { questionId: 1, answer: "rising ocean temperatures" },
      { questionId: 2, answer: "algae" },
      { questionId: 3, answer: "The Great Barrier Reef" },
      { questionId: 4, answer: "Ocean acidification" }
    ]
  },
  {
    id: 8,
    title: "The Rise of Vertical Farming",
    text: "As the global population continues to grow and urbanize, traditional agriculture faces immense pressure to produce more food with fewer resources. Vertical farming presents a potential solution. This innovative method involves growing crops in vertically stacked layers, often in controlled indoor environments. By using hydroponic or aeroponic systems, vertical farms can grow produce year-round, regardless of weather conditions, and use up to 95% less water than conventional farming. Because these farms can be located in urban centers, they drastically reduce transportation costs and carbon emissions, delivering fresher produce to consumers. However, the high initial setup costs and significant energy requirements for lighting and climate control are major hurdles. Critics also argue that vertical farms are currently limited to leafy greens and herbs, and are not yet a viable solution for staple crops like wheat or rice, which form the bulk of the world's food supply.",
    questions: [
      { id: 1, questionText: "What is a major disadvantage of vertical farming?", type: QuestionType.MULTIPLE_CHOICE, options: ["High water usage", "Dependence on weather", "High energy requirements", "Long transportation distances"] },
      { id: 2, questionText: "Vertical farms can use up to 95% less ____ than traditional farms.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "Why can vertical farms reduce carbon emissions?", type: QuestionType.SHORT_ANSWER, wordLimit: 4 },
      { id: 4, questionText: "Currently, vertical farming is not considered viable for growing ____ crops like wheat.", type: QuestionType.GAP_FILLING },
    ],
    answers: [
      { questionId: 1, answer: "High energy requirements" },
      { questionId: 2, answer: "water" },
      { questionId: 3, answer: "reduce transportation costs" },
      { questionId: 4, answer: "staple" }
    ]
  },
    {
    id: 9,
    title: "Circadian Rhythms and Human Health",
    text: "The circadian rhythm is the 24-hour internal clock that is running in the background of your brain and cycles between sleepiness and alertness at regular intervals. It's also known as your sleep/wake cycle. A part of your hypothalamus called the suprachiasmatic nucleus (SCN) controls your circadian rhythm. However, factors outside of your body can also influence it, the most significant of which is light. When there's less light at night, the SCN signals the brain to make more melatonin, a hormone that makes you sleepy. Disruptions to this natural cycle, common in modern life due to artificial lighting and shift work, can have serious health consequences. Chronic misalignment of our internal clock is linked to an increased risk of obesity, diabetes, and cardiovascular diseases. Maintaining a regular sleep schedule, even on weekends, and getting ample natural light exposure during the day are crucial for keeping our circadian rhythms in sync and supporting overall health.",
    questions: [
      { id: 1, questionText: "What is the most significant external factor that influences the circadian rhythm?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 },
      { id: 2, questionText: "The brain's internal clock is controlled by the [BLANK] nucleus.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "Disrupting the sleep/wake cycle is linked to an increased risk of what?", type: QuestionType.MULTIPLE_CHOICE, options: ["Improved memory", "Faster metabolism", "Cardiovascular diseases", "Better immune response"] },
      { id: 4, questionText: "What hormone, which makes you sleepy, is produced when there is less light?", type: QuestionType.SHORT_ANSWER, wordLimit: 1 }
    ],
    answers: [
      { questionId: 1, answer: "light" },
      { questionId: 2, answer: "suprachiasmatic" },
      { questionId: 3, answer: "Cardiovascular diseases" },
      { questionId: 4, answer: "melatonin" }
    ]
  },
  {
    id: 10,
    title: "The Art of Storytelling in Business",
    text: "In an increasingly crowded marketplace, facts and figures are no longer enough to capture an audience's attention. This is where storytelling comes in. A compelling narrative can transform a dry business presentation into an engaging experience, creating an emotional connection with the audience that data alone cannot. Stories are memorable; our brains are hardwired to remember narratives far more easily than lists of bullet points. A good story can simplify complex ideas, making them more understandable and relatable. It can also be used to convey a company's values and mission in an authentic way. For leaders, storytelling is a powerful tool for inspiring teams and driving change. By framing a strategic vision as a story, with a clear beginning, a challenge, and a triumphant resolution, leaders can motivate employees to work towards a common goal. It’s about humanizing the business and connecting on a personal level.",
    questions: [
      { id: 1, questionText: "What can a compelling narrative create with an audience?", type: QuestionType.SHORT_ANSWER, wordLimit: 2 },
      { id: 2, questionText: "Our brains are hardwired to remember ____ more easily than lists.", type: QuestionType.GAP_FILLING },
      { id: 3, questionText: "For business leaders, what is storytelling a powerful tool for?", type: QuestionType.MULTIPLE_CHOICE, options: ["Increasing profits directly", "Analyzing market data", "Inspiring teams", "Reducing operational costs"] },
      { id: 4, questionText: "A good story can make complex ideas more ____.", type: QuestionType.GAP_FILLING }
    ],
    answers: [
      { questionId: 1, answer: "emotional connection" },
      { questionId: 2, answer: "narratives" },
      { questionId: 3, answer: "Inspiring teams" },
      { questionId: 4, answer: "understandable" }
    ]
  }
];
