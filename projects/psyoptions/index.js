const { fetchURL } = require('../helper/utils')
const { getCoingeckoId } = require("../helper/solana");

const PSY_OPTIONS_TVL_ENDPOINT = "https://api.psyoptions.io/tvl";

const mintToCoinGeckoIdMap = {
  "9tzZzEHsKnwFL1A3DyFJwj36KnZj3gZ7g4srWp9YTEoh": "arb-protocol"
}

async function tvl() {
  const getCg = await getCoingeckoId();

  const mintAmountMap = await (await fetchURL(PSY_OPTIONS_TVL_ENDPOINT))?.data;

  const tvl = {};

  Object.keys(mintAmountMap).forEach(mintAddress => {
    let coingeckoId = getCg(mintAddress);
    if (!coingeckoId) {
      coingeckoId = mintToCoinGeckoIdMap[mintAddress];
    }
    tvl[coingeckoId] = mintAmountMap[mintAddress];
  })
  return tvl
}

module.exports = {
  misrepresentedTokens: true,
  timetravel: false,
  solana: {
    tvl,
  },
};
