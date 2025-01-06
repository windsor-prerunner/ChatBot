/**
 * @description max_tokens: This parameter sets the maximum number of tokens (words or characters)
 * that the model can generate in its response. In this case, it is set to 150,
 * meaning the model's response will be limited to 150 tokens.
 * @description stop: This parameter is an array of strings that specifies where the model should
 * stop generating further tokens. Here, it is set to ['\n'],
 * which means the model will stop generating tokens when it encounters a newline character.
 * @type {{stop: string[], max_tokens: number}}
 */

const baseOptions = {
  max_tokens: 150,
  stop: ['\n']
};
/**
 * @description Temperature: This parameter affects the randomness of the model's output.
 * A lower temperature (e.g., 0.2) makes the model's responses more focused and deterministic,
 * meaning it will choose the most likely next word. A higher temperature (e.g., 0.8) makes
 * the responses more random and creative, allowing for more varied and less predictable outputs.
 * @description Top_p (nucleus sampling): This parameter controls the diversity of the output by
 * limiting the model to consider only the top p percentage of the probability mass. For example,
 * if top_p is set to 0.9, the model will only consider the top 90% of the most likely next words,
 * which helps in generating more coherent and focused responses. Lower top_p values make the output more conservative,
 * while higher values allow for more diversity.
 * @type {{top_p: number, stop: [string], max_tokens: number, temperature: number}}
 */
const advancedOptions = {
  ...baseOptions,
  temperature: 0.7,
  top_p: 0.9
};
/**
 *
 * @type {{top_p: number, max_tokens: number, temperature: number}}
 */
const minimalOptions = {
  max_tokens: 50,
  temperature: 0.3,
  top_p: 0.5
};

/**
 *
 * @type {{top_p: number, max_tokens: number, temperature: number}}
 */
const creativeOptions = {
  max_tokens: 200,
  temperature: 0.9,
  top_p: 1.0
};

/**
 *
 * @type {{top_p: number, max_tokens: number, temperature: number}}
 */
const conciseOptions = {
  max_tokens: 100,
  temperature: 0.5,
  top_p: 0.8
};

const optionsConfig = {
  base: baseOptions,
  advanced: advancedOptions,
  minimal: minimalOptions,
  creative: creativeOptions,
  concise: conciseOptions
};

export default optionsConfig
