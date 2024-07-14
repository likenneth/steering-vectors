Search.setIndex({"alltitles": {"API Reference:": [[6, null]], "About": [[0, "about"]], "Acknowledgements": [[0, "acknowledgements"]], "Advanced usage": [[1, "advanced-usage"]], "Basic usage": [[5, "basic-usage"]], "Batch training": [[5, "batch-training"]], "Contents": [[6, "contents"]], "Contributing": [[0, "contributing"]], "Custom aggregators": [[1, "custom-aggregators"]], "Custom layer mapping": [[1, "custom-layer-mapping"]], "Custom operators": [[1, "custom-operators"]], "Extracting activations and aggergating manually": [[1, "extracting-activations-and-aggergating-manually"]], "How this works": [[0, "how-this-works"]], "Installation": [[6, "installation"]], "License": [[0, "license"]], "Magnitude scaling": [[5, "magnitude-scaling"]], "Manually patching and unpatching": [[1, "manually-patching-and-unpatching"]], "Only apply steering to later tokens": [[1, "only-apply-steering-to-later-tokens"]], "Project Links": [[6, null]], "Steering Vectors": [[6, "steering-vectors"], [6, "id1"]], "SteeringVector": [[3, "steeringvector"]], "Using MLP, attention, or other layers": [[1, "using-mlp-attention-or-other-layers"]], "Using specific layers": [[5, "using-specific-layers"]], "record_activations": [[2, "record-activations"]], "train_steering_vector": [[4, "train-steering-vector"]]}, "docnames": ["about", "advanced_usage", "api/record_activations", "api/steering_vector", "api/train_steering_vector", "basic_usage", "index"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1}, "filenames": ["about.rst", "advanced_usage.rst", "api/record_activations.rst", "api/steering_vector.rst", "api/train_steering_vector.rst", "basic_usage.rst", "index.rst"], "indexentries": {"aggregate_activations() (in module steering_vectors)": [[4, "steering_vectors.aggregate_activations", false]], "apply() (steering_vectors.steeringvector method)": [[3, "steering_vectors.SteeringVector.apply", false]], "extract_activations() (in module steering_vectors)": [[4, "steering_vectors.extract_activations", false]], "layer_activations (steering_vectors.steeringvector attribute)": [[3, "steering_vectors.SteeringVector.layer_activations", false]], "layer_type (steering_vectors.steeringvector attribute)": [[3, "steering_vectors.SteeringVector.layer_type", false]], "model_hooks (steering_vectors.steeringpatchhandle attribute)": [[3, "steering_vectors.SteeringPatchHandle.model_hooks", false]], "patch_activations() (steering_vectors.steeringvector method)": [[3, "steering_vectors.SteeringVector.patch_activations", false]], "record_activations() (in module steering_vectors)": [[2, "steering_vectors.record_activations", false]], "remove() (steering_vectors.steeringpatchhandle method)": [[3, "steering_vectors.SteeringPatchHandle.remove", false]], "steeringpatchhandle (class in steering_vectors)": [[3, "steering_vectors.SteeringPatchHandle", false]], "steeringvector (class in steering_vectors)": [[3, "steering_vectors.SteeringVector", false]], "to() (steering_vectors.steeringvector method)": [[3, "steering_vectors.SteeringVector.to", false]], "train_steering_vector() (in module steering_vectors)": [[4, "steering_vectors.train_steering_vector", false]]}, "objects": {"steering_vectors": [[3, 0, 1, "", "SteeringPatchHandle"], [3, 0, 1, "", "SteeringVector"], [4, 3, 1, "", "aggregate_activations"], [4, 3, 1, "", "extract_activations"], [2, 3, 1, "", "record_activations"], [4, 3, 1, "", "train_steering_vector"]], "steering_vectors.SteeringPatchHandle": [[3, 1, 1, "", "model_hooks"], [3, 2, 1, "", "remove"]], "steering_vectors.SteeringVector": [[3, 2, 1, "", "apply"], [3, 1, 1, "", "layer_activations"], [3, 1, 1, "", "layer_type"], [3, 2, 1, "", "patch_activations"], [3, 2, 1, "", "to"]]}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "attribute", "Python attribute"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "objtypes": {"0": "py:class", "1": "py:attribute", "2": "py:method", "3": "py:function"}, "terms": {"": [0, 1, 5], "0": [1, 3, 5], "1": [1, 3, 4, 5], "10": 1, "2": [0, 1, 5, 6], "3": 5, "5": 5, "8": 5, "A": [0, 1, 2, 3, 4, 6], "By": [1, 5], "For": [1, 3, 6], "If": [1, 2, 3, 4, 5], "No": 6, "The": [0, 1, 2, 3, 4, 5], "Then": [5, 6], "There": 1, "To": [0, 1, 5, 6], "_mean_aggreg": 4, "abl": 1, "ablat": 1, "ablation_oper": 1, "ablation_then_addition_oper": 1, "about": 6, "abov": 6, "acknowledg": 6, "activ": [0, 2, 3, 4, 6], "actvat": 6, "ad": [1, 3], "add": 1, "addit": [0, 6], "advanc": 6, "affect": 1, "after": [1, 3], "aggerg": 6, "aggreg": [4, 6], "aggregate_activ": [1, 4], "ai": [0, 6], "align": 1, "all": [1, 2, 3, 4, 5], "allow": 0, "along": 1, "also": [0, 1, 5], "alwai": 1, "an": [0, 1], "ani": [0, 6], "answer": 6, "appli": [0, 3, 4, 5, 6], "applic": 5, "approach": [0, 6], "approxim": 4, "ar": [0, 1, 5, 6], "arbitrari": 0, "architectur": 0, "arg": 3, "argument": [1, 5], "assum": 5, "attent": 6, "attn": 1, "automat": [1, 2, 3, 4], "automodelforcausallm": [2, 3, 5], "autotoken": 5, "awar": 0, "b": 6, "bar": 4, "basic": 6, "batch": [4, 6], "batch_siz": [4, 5], "befor": [2, 4], "begin": [1, 5], "behav": 6, "behavior": [0, 1, 5], "beief": 6, "beij": 5, "believ": 6, "below": [1, 6], "berlin": 5, "between": [1, 4], "block": [0, 1], "both": 3, "bugfix": 0, "built": [0, 1], "call": [1, 3], "can": [0, 1, 3, 5, 6], "capit": 5, "case": [1, 3], "chang": 0, "characterist": 6, "check": 6, "choic": 6, "choos": 1, "class": 3, "clone": 2, "clone_activ": 2, "code": 0, "codebas": 0, "collect": 5, "common": 1, "compon": 1, "conceptu": 0, "config": 1, "configur": 1, "confront": 6, "context": 1, "contrast": [0, 6], "contribut": 6, "control": 6, "conveni": 1, "correct": 1, "could": 1, "count": 5, "cpu": 4, "creat": 1, "crystal": [5, 6], "custom": [0, 5, 6], "d": 1, "data": 1, "decod": [0, 1, 5], "decoder_block": [1, 2, 3, 4], "def": 1, "default": [1, 2, 3, 4, 5], "delta": 1, "demonstr": 1, "denom": 1, "depend": 5, "descript": 4, "devic": 3, "dict": [2, 4], "dictionari": [1, 2, 3, 4], "differ": [1, 4], "dim": 1, "direct": [1, 6], "do": [0, 1, 6], "document": 0, "doe": 3, "done": [1, 5], "dot": 1, "doubl": 5, "down": [0, 6], "drawback": 0, "dtype": 3, "dure": 1, "e": [1, 5], "each": [1, 2, 3, 4], "easier": 3, "either": 3, "elicit": 6, "end": [0, 5], "engin": [0, 6], "england": 5, "enough": 5, "ensur": 1, "entir": 1, "equal": 1, "eras": 1, "etc": [5, 6], "even": 1, "everi": [0, 2], "evid": 6, "exactli": 1, "exampl": [1, 2, 3, 5, 6], "excel": 0, "exclud": 1, "exit": 1, "explicitli": 1, "extract": [4, 6], "extract_activ": [1, 4], "f": 1, "fals": 4, "fancier": 1, "faster": 5, "final": 4, "find": [1, 6], "first": [1, 4], "follow": [0, 6], "forward": [0, 1, 2, 3, 5], "franc": 5, "from": [0, 1, 2, 3, 4, 5, 6], "from_pretrain": [2, 3, 5], "full": [1, 5], "fulli": 1, "function": [1, 2, 3, 4], "further": 1, "g": [1, 5], "gemma": 6, "gener": [2, 3, 5], "get": 1, "github": [0, 6], "given": [2, 3, 4], "gpt": [1, 5, 6], "gpt2": [1, 2, 3, 5], "gpt_layer_config": 1, "gptneox": 6, "gpu": 5, "guarante": 1, "guess": 1, "h": 1, "ha": [0, 5], "half": 5, "handl": [1, 3], "happi": 6, "have": [0, 1, 5, 6], "heal": [5, 6], "help": 1, "hidden": 6, "hidden_dim": 1, "higher": 5, "home": 6, "hook": 0, "host": 6, "how": [1, 6], "howev": [1, 5], "huggingfac": [0, 1, 5, 6], "i": [0, 1, 2, 3, 4, 5, 6], "identifi": 6, "ignor": 1, "import": [1, 5], "improv": 0, "increas": 5, "index": [3, 4], "indic": [3, 5], "infer": [2, 3, 4], "info": 6, "input": [1, 5], "input_layernorm": 1, "insid": 1, "inspir": 0, "instanc": 1, "instead": 0, "int": [1, 2, 4], "invert": 5, "isn": 0, "issu": 0, "its": [1, 3, 6], "kwarg": 3, "lambda": 1, "languag": [1, 5, 6], "later": 6, "layer": [0, 2, 3, 4, 6], "layer_activ": 3, "layer_config": [1, 2, 3, 4], "layer_num": 2, "layer_typ": [1, 2, 3, 4], "layernorm": 1, "lead": 0, "learn": 1, "less": 6, "librari": [0, 1, 5, 6], "licens": 6, "like": [1, 6], "limit": 5, "linear": 1, "list": [1, 2, 3, 4, 5], "llama": [0, 5, 6], "lm": 6, "ln_1": 1, "ln_2": 1, "local": 4, "logist": 1, "logistic_aggreg": 1, "london": 5, "long": 1, "look": 1, "loop": 1, "lower": 5, "magic": 5, "magnitud": 6, "mai": 5, "major": 0, "make": [0, 5, 6], "manag": 1, "mani": 6, "manual": [3, 6], "map": [2, 3, 4, 6], "mask": 3, "match": [1, 2, 3, 4], "matcher": 1, "mean": [1, 4], "mean_act": 1, "mean_aggreg": 4, "memori": 5, "method": 3, "might": 6, "min_token_index": [1, 3], "minimum": 3, "mistral": 6, "mit": 0, "mlp": 6, "model": [0, 1, 2, 3, 4, 5, 6], "model_hook": 3, "modifi": [0, 3], "modul": 1, "more": [0, 5, 6], "most": [1, 3], "move": [3, 4], "move_to_cpu": 4, "multipli": [1, 3, 5], "must": 0, "my_oper": 1, "name": 1, "named_modul": 1, "neat": 6, "need": [0, 1], "neg": [1, 4, 5, 6], "neg_activ": 1, "neg_acts_by_lay": 4, "negative_prompt": 5, "negative_str": 4, "neither": 3, "new": [0, 3], "none": [2, 3, 4], "norm": 1, "norm_mean_aggreg": 1, "normal": 1, "num": 1, "num_sampl": 1, "number": [1, 2, 4, 5], "observ": 6, "offici": 0, "often": 5, "onli": [5, 6], "open": 0, "oper": [3, 6], "origin": [1, 3], "other": 6, "out": 6, "output": [1, 5], "pair": 6, "paper": 0, "paramet": [1, 2, 3, 4], "pari": 5, "part": 1, "pass": [0, 1, 2, 5], "patch": [3, 5, 6], "patch_activ": 3, "pca": 1, "pca_aggreg": 1, "pip": 6, "place": 3, "pleas": 0, "pos_activ": 1, "pos_acts_by_lay": 4, "posit": [1, 4, 5, 6], "positive_prompt": 5, "positive_str": 4, "possibl": [0, 1], "post": 1, "post_attention_layernorm": 1, "power": 6, "prefer": 1, "princip": 1, "process": 6, "progress": 4, "project": [0, 1], "prompt": [1, 4, 5, 6], "properti": 5, "provid": [1, 2, 3, 4, 6], "pt": 5, "pull": 0, "pypi": 6, "pytorch": [0, 1, 5, 6], "question": 6, "re": [5, 6], "read": [0, 4], "read_token_index": 4, "record": 2, "record_activ": 6, "recorded_activ": 2, "regress": 1, "releas": [0, 6], "remov": [1, 3], "replac": [0, 1], "repo": 0, "represent": [0, 6], "request": 0, "requir": 3, "respond": 1, "respons": 6, "restor": 3, "result": 1, "return": [1, 2, 3, 4], "return_tensor": 5, "run": [1, 3, 5], "runtim": 1, "same": [1, 3], "sampl": [4, 5], "scale": [3, 6], "scenario": 1, "scikit": 1, "second": 4, "select": 3, "selector": 1, "self_attn": 1, "set": [1, 5], "shape": 1, "share": 6, "show": 4, "show_progress": [4, 5], "simpl": 0, "singl": 4, "size": [4, 5], "slice": 3, "so": 1, "some": [0, 1], "someth": 1, "sometim": [1, 5], "sourc": [2, 3, 4], "special": 1, "specif": 6, "state": [1, 3], "statement": 6, "steer": [0, 3, 4, 5], "steering_vec": [1, 5], "steering_vector": [0, 1, 2, 3, 4, 5], "steeringpatchhandl": 3, "steeringvector": [4, 6], "string": 1, "subtract": 6, "suffici": 1, "sycoph": 6, "sycophant": 6, "t": 0, "take": [1, 3, 4], "taken": 0, "templat": 1, "tensor": [1, 2, 3, 4], "them": 2, "thi": [1, 2, 3, 4, 5, 6], "thing": 3, "through": [1, 2], "token": [3, 4, 5, 6], "token_indic": 3, "top": [0, 6], "torch": [1, 3], "tqdm_desc": 4, "train": [1, 4, 6], "train_steering_vector": [1, 5, 6], "training_sampl": [4, 5], "transform": [1, 5, 6], "transpar": [0, 6], "true": [2, 4, 5], "truth": 5, "try": 6, "tupl": [4, 5], "two": 4, "type": [0, 1, 2, 3, 4], "u": 0, "under": 0, "underli": 0, "undo": 3, "unexpect": 0, "unlik": 1, "unpatch": 6, "us": [0, 3, 4, 6], "usag": 6, "user": 0, "utili": 6, "vec": 1, "vector": [0, 1, 3, 4, 5], "via": [0, 6], "wai": [0, 1], "want": [1, 5], "we": [0, 6], "welcom": 0, "well": [1, 6], "when": 1, "where": 4, "which": [0, 1, 6], "whichev": 1, "while": [0, 1], "within": 1, "without": [0, 1], "won": 0, "work": [1, 5, 6], "wrap": 0, "wrapper": 0, "xl": [2, 3], "ye": 6, "you": [0, 1, 5, 6], "your": [5, 6], "yourself": 1}, "titles": ["About", "Advanced usage", "record_activations", "SteeringVector", "train_steering_vector", "Basic usage", "Steering Vectors"], "titleterms": {"about": 0, "acknowledg": 0, "activ": 1, "advanc": 1, "aggerg": 1, "aggreg": 1, "api": 6, "appli": 1, "attent": 1, "basic": 5, "batch": 5, "content": 6, "contribut": 0, "custom": 1, "extract": 1, "how": 0, "instal": 6, "later": 1, "layer": [1, 5], "licens": 0, "link": 6, "magnitud": 5, "manual": 1, "map": 1, "mlp": 1, "onli": 1, "oper": 1, "other": 1, "patch": 1, "project": 6, "record_activ": 2, "refer": 6, "scale": 5, "specif": 5, "steer": [1, 6], "steeringvector": 3, "thi": 0, "token": 1, "train": 5, "train_steering_vector": 4, "unpatch": 1, "us": [1, 5], "usag": [1, 5], "vector": 6, "work": 0}})