export const initialize = () => `
    window.__lxt_cache = window.__lxt_cache || [];
    function lxt() {
    window.__lxt_cache.push(arguments);
    };
    window.lxt_attributes = {
        cities_interested_in: '9419ac83de7d4bbe9505b19ea07943ab',
        countries_interested_in: '7610f24f7b344398a48ea3612927667f',
        date_of_last_visit: '30ac40d987584e0fb4da92360d90b396',
        dates_visited: '07570027f9574079960eb2a16309b202',
        device_used: 'afdad7caae5747f193ae4f3040339ca3',
        email: '836d7a43113249b1a3fdaf0ec56adb60',
        email_sha256: '3824dd1d83034df1ae3fce9ce160a45e',
        events_interested_in: '1861acd8fd104d6d8cdf42cb427e25ee',
        hotels_interested_in: '603453352fec43d19be0e1cab8c5a2e3',
        leagues_interested_in: 'cd7e45f9bdf54165a6e175c86ea129e7',
        pages_viewed: 'd0b6267694b3449e997852b432846c9e',
        referrer_url: '175aa25884484b9eae4f43ab6c79e608',
        searched_for: '9c12678ede4f4efda3b10e415c73cf42',
        utm_campaign: 'dccd536a5d914a00b21bab48f9416f0d',
        utm_content: 'b8ca8122caa34b3faad16be372ab6613',
        utm_medium: '51b5c924d09d43f783dc780c49981fe4',
        utm_source: 'b599341becea4cc3831844f1357b5271',
        utm_term: 'eb56daa46eb64a40bb1ec012d4574182',
        venues_interested_in: '734d4796f7c14ddb853008a10aaa5924'
    };
    lxt('initiate', '44900a50bf934e12a16fb06b3eb8552d', window.lxt_attributes);'

    lxt('track', 'date_of_last_visit', '{{Lexer - Date of Last Visit}}');
    lxt('track', 'dates_visited', '{{Lexer - Dates Visited}}');
`;
