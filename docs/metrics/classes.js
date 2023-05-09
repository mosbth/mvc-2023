var classes = [
    {
        "name": "Mos\\Dice\\DiceHand",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNumberDices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Mos\\Dice\\Dice"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 27,
        "vocabulary": 5,
        "volume": 62.69,
        "difficulty": 6.33,
        "effort": 397.05,
        "level": 0.16,
        "bugs": 0.02,
        "time": 22,
        "intelligentContent": 9.9,
        "number_operators": 8,
        "number_operands": 19,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 0,
        "loc": 35,
        "lloc": 35,
        "mi": 53.2,
        "mIwoC": 53.2,
        "commentWeight": 0,
        "kanDefect": 0.84,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.8,
        "relativeSystemComplexity": 9.8,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 49,
        "package": "Mos\\Dice\\",
        "pageRank": 0.08,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Mos\\Dice\\DiceGraphic",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAsString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Mos\\Dice\\Dice"
        ],
        "parents": [
            "Mos\\Dice\\Dice"
        ],
        "implements": [],
        "lcom": 2,
        "length": 11,
        "vocabulary": 10,
        "volume": 36.54,
        "difficulty": 1.13,
        "effort": 41.11,
        "level": 0.89,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 32.48,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 13,
        "lloc": 13,
        "mi": 64.62,
        "mIwoC": 64.62,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "Mos\\Dice\\",
        "pageRank": 0.08,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Mos\\Dice\\Dice",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAsString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 8,
        "volume": 45,
        "difficulty": 1.67,
        "effort": 75,
        "level": 0.6,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 27,
        "number_operators": 5,
        "number_operands": 10,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 22,
        "lloc": 22,
        "mi": 59.01,
        "mIwoC": 59.01,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 12,
        "package": "Mos\\Dice\\",
        "pageRank": 0.47,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Mos\\Guess\\GuessException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Mos\\Guess\\",
        "pageRank": 0.28,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Mos\\Guess\\Guess",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "random",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tries",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "number",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeGuess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 7,
        "ccnMethodMax": 6,
        "externals": [
            "Mos\\Guess\\GuessException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 56,
        "vocabulary": 18,
        "volume": 233.52,
        "difficulty": 11.14,
        "effort": 2600.52,
        "level": 0.09,
        "bugs": 0.08,
        "time": 144,
        "intelligentContent": 20.97,
        "number_operators": 21,
        "number_operands": 35,
        "number_operators_unique": 7,
        "number_operands_unique": 11,
        "cloc": 39,
        "loc": 82,
        "lloc": 43,
        "mi": 90.66,
        "mIwoC": 46.84,
        "commentWeight": 43.82,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.3,
        "relativeSystemComplexity": 4.3,
        "totalStructuralComplexity": 5,
        "totalDataComplexity": 16.5,
        "totalSystemComplexity": 21.5,
        "package": "Mos\\Guess\\",
        "pageRank": 0.08,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]