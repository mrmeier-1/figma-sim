import json

def generate_movements_config():
    movements = [
        {"id": "1:2", "newX": 100, "newY": 100},
        {"id": "1:3", "newX": 200, "newY": 200}
    ]
    config = {"movements": movements}
    with open('movements_config.json', 'w') as f:
        json.dump(config, f, indent=2)

generate_movements_config()
