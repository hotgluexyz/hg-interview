# hotglue frontend coding challenge

## Note
You should get this scaffold running on your machine prior to the interview. You will receive the actual task during the interview.

## Description
For your frontend technical interview, you will be using this React project, which is a `create-react-app` structure with the following additions:

- Material UI has been installed for some standard components out of the box.
- There is a function in `src/api.js` called `getSuggestedIcons` which takes a parameter `query`.

`getSuggestedIcon` returns a JSON payload containing suggested icons related to the `query` string.
A sample response is included below:

```json
[
    {
        "id": 616495,
        "type": 4,
        "priority": "24.247299",
        "selection": 1,
        "premium": 0,
        "state": 1,
        "description": "Squid",
        "colors": "FF0000;808080",
        "color": 2,
        "style": 0,
        "stroke": 1,
        "detail": 0,
        "style_id": 8,
        "style_name": "Flat",
        "style_slug": "family/special/flat",
        "style_class": "flat",
        "family_id": 3,
        "family_name": "Special",
        "family_slug": "family/special",
        "priority_style": "30035.000000",
        "slug": "free-icon/squid_616495",
        "license": "2",
        "added": 1509965237,
        "pack_id": 616407,
        "pack_name": "Animals and nature",
        "pack_slug": "packs/animals-and-nature",
        "pack_priority": "41.360100",
        "pack_items": 165,
        "designer_id": 1,
        "designer_slug": "freepik",
        "designer_name": "Freepik",
        "designer_website": "https://www.freepik.com",
        "downloads": "258",
        "views": "0",
        "tags": "squid,aquarium,sea life,animals,animal,aquatic",
        "category": "animals",
        "item_equivalent": "616661",
        "equivalents": 0,
        "tags_id": "214,221,22442,129622,181838,193253",
        "category_id": "11",
        "images": {
            "png": {
                "128": "https://cdn-icons-png.flaticon.com/128/616/616495.png",
                "512": "https://cdn-icons-png.flaticon.com/512/616/616495.png"
            }
        },
        "editor_choice": true,
        "style_color": "color",
        "style_shape": "fill"
    },
    {
        "id": 616661,
        "type": 4,
        "priority": "8.615590",
        "selection": 1,
        "premium": 0,
        "state": 1,
        "description": "Squid",
        "colors": "FF0000;808080",
        "color": 2,
        "style": 0,
        "stroke": 1,
        "detail": 0,
        "style_id": 15,
        "style_name": "Lineal color",
        "style_slug": "family/special/lineal-color",
        "style_class": "linear-colored",
        "family_id": 3,
        "family_name": "Special",
        "family_slug": "family/special",
        "priority_style": "30035.000000",
        "slug": "free-icon/squid_616661",
        "license": "2",
        "added": 1509965173,
        "pack_id": 616573,
        "pack_name": "Animals and nature",
        "pack_slug": "packs/animals-and-nature-2",
        "pack_priority": "10.774600",
        "pack_items": 165,
        "designer_id": 1,
        "designer_slug": "freepik",
        "designer_name": "Freepik",
        "designer_website": "https://www.freepik.com",
        "downloads": "13",
        "views": "0",
        "tags": "squid,sea life,animals,animal,aquarium,aquatic",
        "category": "animals",
        "item_equivalent": "616827",
        "equivalents": 0,
        "tags_id": "214,221,22442,129622,181838,193253",
        "category_id": "11",
        "images": {
            "png": {
                "128": "https://cdn-icons-png.flaticon.com/128/616/616661.png",
                "512": "https://cdn-icons-png.flaticon.com/512/616/616661.png"
            }
        },
        "editor_choice": true,
        "style_color": "color",
        "style_shape": "lineal-color"
    }
]
```
