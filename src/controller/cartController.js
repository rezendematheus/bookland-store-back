import db from "../database/database.js";

export async function addToCart(req, res) {
  const { userId } = res.locals.session;
  const { itemId } = req.body;

  console.log(userId);

  if (!userId) res.status(401).send("Missing userId");

  try {
    await db.collection("cart").insertOne({ userId, itemId });

    res.status(201).send();
  } catch (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(500).send(errors);
  }
}

export async function getUserCart(req, res) {
  const { userId } = res.locals.session;

  if (!userId) res.status(401).send("Missing userId");
  try {
    const cartItems = await db.collection("cart").find({ userId }).toArray();


    const teste = cartItems.map((item) => item.itemId)
    console.log(teste)

    const books = await db.collection('products').find({ id: { $in: teste } }).toArray()


    res.send(books);
  } catch (error) {
    //const errors = error.details.map(detail => detail.message)
    return res.status(500).send(error);
  }
}

export async function deleteItemCart(req, res) {
  const { userId } = res.local.session;
  const { itemId } = req.body;

  if (!userId) res.status(401).send("Missing userId");
  try {
    await db.collection("cart").deleteOne({ userId, itemId });

    res.status(200).send("Item deleted");
  } catch (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(500).send(errors);
  }
}

export async function deleteManyCart(req, res) {
  const { userId } = res.local.session;

  if (!userId) res.status(401).send("Missing userId");
  try {
    await db.collection("cart").deleteMany({ userId });

    res.status(200).send("Items deleted");
  } catch (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(500).send(errors);
  }
}
