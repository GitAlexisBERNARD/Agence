migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zidddasyr320ve0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "olptytrr",
    "name": "agent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "krfzqf3sx3d9o8x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zidddasyr320ve0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "olptytrr",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "krfzqf3sx3d9o8x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
