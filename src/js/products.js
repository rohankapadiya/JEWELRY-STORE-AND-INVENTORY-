/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Diamond Finger Ring",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description: "This ultra-modish 18 karat yellow gold ring features 5 diamonds",
    price: 1099,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "P2",
    title: "Ridged Single Stone Diamond Ring",
    imageUrl:
      "https://pics.angara.com/abc/catalog/product/SR1298D/YG/IJI1I2/4.4/1/SR1298D-YG-IJI1I2-4.4.jpg",
    description:
      "Dainty diamond ring set in 18 karat yellow gold. The lone diamond flanked by ridged bands of gold makes this a charming ring.",
    price: 1299.99,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "P3",
    title: "Layered Multi Stone Diamond Ring",
    imageUrl: "https://pics.angara.com/abc/catalog/product/s/r/sr1713d-yg-iji1i2-3.4.jpg",
    description:
      "Layered Contemporary 18 Karat Gold and Diamond Finger Ring. The diamond rows exudes a sharp sophistication to your ensemble. ",
    price: 2099,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "P4",
    title: "Minimalist Geometric Band For Men",
    imageUrl:
      "https://pics.angara.com/abc/catalog/product/WRD_SR2457D/YG/IJI1I2/1.5/1/WRD_SR2457D-YG-IJI1I2-1.5.jpg",
    description:
      "inspired by infinity, this mixure ring for men symbolizes the never-ending love and devotion. Set in 18 Karat Yellow Gold and other metals.",
    price: 799,
    discontinued: false,
    categories: ["c2", "c3", "c4"]
  },
  {
    id: "P5",
    title: "Triangular Laser Cut Pendant Rose Gold",
    imageUrl: "https://pics.angara.com/abc/catalog/product/s/p/sp1082ctd-rg-a-8x6.jpg",
    description:
      "Elevate the subtleness of your everyday charm when donning this Triangular Laser Cut Floral Pattern Gold Pendant crafted in Rose Gold with One diamond",
    price: 699,
    discontinued: false,
    categories: ["c1", "c4"]
  },

  {
    id: "P6",
    title: "Triangular Laser Cut Pendant Silver",
    imageUrl:
      "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Elevate the subtleness of your everyday charm when donning this Triangular Laser Cut Floral Pattern Gold Pendant crafted in Silver with One diamond",
    price: 899,
    discontinued: false,
    categories: ["c1", "c3"]
  },

  {
    id: "P7",
    title: "Diamond Silver Pendant",
    imageUrl:
      "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Elevate the subtleness of your everyday charm when donning this round Laser Cut Floral Pattern Gold Pendant crafted in Silver with One diamond",
    price: 1299,
    discontinued: false,
    categories: ["c1", "c3"]
  },

  {
    id: "P8",
    title: "RoseGold Bracelet",
    imageUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Wrap splendour around your wrist with this stunning bracelet crafted in 950 Rose Gold with 1 diamond",
    price: 899,
    discontinued: false,
    categories: ["c4", "c1"]
  },
  {
    id: "P9",
    title: "Silver Bracelet",
    imageUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Wrap splendour around your wrist with this stunning bracelet crafted in Silver with 1 diamond",
    price: 1099,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P10",
    title: "Gold Bracelet",
    imageUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Wrap splendour around your wrist with this stunning bracelet crafted in Gold with 1 diamond",
    price: 999,
    discontinued: false,
    categories: ["c2", "c1"]
  },

  {
    id: "P11",
    title: "Eye-Catching Gold Chain For Men",
    imageUrl:
      "https://images.unsplash.com/photo-1656428851610-a2de17b056a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Catch the attention of everyone around with your bold and confident style. Pair your outfit with this chain for men crafted in 18 karat yellow gold with multiple diamonds",
    price: 999,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "P12",
    title: "Eye-Catching Silver Chain For Men",
    imageUrl:
      "https://images.unsplash.com/photo-1656428851610-a2de17b056a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Catch the attention of everyone around with your bold and confident style. Pair your outfit with this chain for men crafted in 18 karat yellow gold with multiple diamonds",
    price: 699,
    discontinued: false,
    categories: ["c1", "c3"]
  },

  {
    id: "P13",
    title: "Scintillating Diamond And Gold Long Drop Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1588891825655-aa526b56f805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Set your style ablaze by adding these dazzling diamond long drop earrings, crafted in 18 karat yellow gold, to your ensemble. Stone clarity vs.",
    price: 2099,
    discontinued: false,
    categories: ["c1", "c2"]
  },

  {
    id: "P14",
    title: "Scintillating Diamond And Silver Long Drop Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1588891825655-aa526b56f805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Set your style ablaze by adding these dazzling diamond long drop earrings, crafted in silver, to your ensemble. Stone clarity vs.",
    price: 1899,
    discontinued: false,
    categories: ["c1", "c3"]
  },
  {
    id: "P15",
    title: "Scintillating Diamond And Rose Gold Long Drop Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1588891825655-aa526b56f805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Set your style ablaze by adding these dazzling diamond long drop earrings, crafted in rose gold, to your ensemble. Stone clarity vs.",
    price: 1699,
    discontinued: false,
    categories: ["c1", "c4"]
  },

  {
    id: "P16",
    title: "Romantic Finger Ring For Men",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Add panache to your style with this stunning finger ring for men crafted in 18 karat rose and white gold. ",
    price: 899,
    discontinued: false,
    categories: ["c2", "c4"]
  },

  {
    id: "P17",
    title: "Romantic Diamond Finger(Silver) Ring For Men",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Add panache to your style with this stunning finger ring for men crafted in silver and rose gold.",
    price: 799,
    discontinued: false,
    categories: ["c4", "c3"]
  },

  {
    id: "P18",
    title: "Romantic Diamond Finger(Rose Gold) Ring For Men",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Add panache to your style with this stunning finger ring for men crafted in diamond and rose gold",
    price: 699,
    discontinued: false,
    categories: ["c4", "c1"]
  },
  {
    id: "P19",
    title: "Stunning Silver Finger Ring",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Stacked pattern ring set in silver.Emulating two ring stacked upon each other, this band is as unique as the one who wears it",
    price: 899,
    discontinued: false,
    categories: ["c1", "c3"]
  },

  {
    id: "P20",
    title: "Stunning Rose Gold Finger Ring",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    description:
      "Stacked pattern ring set in rose gold.Emulating two ring stacked upon each other, this band is as unique as the one who wears it",
    price: 699,
    discontinued: false,
    categories: ["c1", "c2"]
  }
];
