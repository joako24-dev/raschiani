// ================== PRODUCTOS ==================

const masvendidos = [
{nombre:"Khamrah",precio:66000,notas:"Dulce,Avainillado,Canela,Ambarado,Especiado,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522317/khamrah_ntd1ev.jpg"},

{nombre:"Vanilla Voyage",precio:95000,notas:"Dulce,Avainillado,Gourmand,Ambarado,Almizclado,Floral suave,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433424/voyage_dzoj4n.webp"},

{nombre:"Hawas Diva",precio:105000,notas:"Marino,Cítrico,Aromático,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776604792/WhatsApp_Image_2026-04-17_at_16.39.27_2_c5dmez.jpg"},

]

const rasasi = [ 
{nombre:"Hawas Fire",precio:90000,notas:"Ámbar,Aromático,Mineral,Marino,Especiado suave,Floral blanco,Animálico,Salado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433882/fire_jxhdvp.webp"},

{nombre:"Hawas Ice",precio:92000,notas:"Afrutados,Cítrico,Dulce,Fresco,Aromático,Almizclado,Atalcado,Fresco especiado,Verde,Floral blanco", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776122441/ice2_bed9jd.jpg"},

{nombre:"Hawas Malibu",precio:105000,notas:"Cítrico,Afrutado,Tropical,Dulce,Ambarado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433917/malibu_bpjtb6.webp"},

{nombre:"Hawas Kobra",precio:107000,notas:"Cítrico,Fresco especiado,Almizclado,Fresco,Amaderado,Ámbar,Canela,Atalcado,Cálido especiado,Verde", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433919/kobra_weywkl.webp"},

{nombre:"Hawas Black",precio:74000,notas:"Amaderado,Cítrico,Musgoso,Terroso,Fresco especiado,Afrutado,Dulce,Pachulí,Aromático,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433911/black_gudi6v.webp"},

{nombre:"Hawas Tropical",precio:105000,notas:"Dulce,Verde,Coco,Amaderado,Avainillado,Afrutados", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433914/tropical_b6a2oa.webp"},

{nombre:"Hawas Diva",precio:105000,notas:"Marino,Cítrico,Aromático,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776604792/WhatsApp_Image_2026-04-17_at_16.39.27_2_c5dmez.jpg"},

{nombre:"Hawas London",precio:105000,notas:"Amaderado,Cítrico,Aromático,Ámbar,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776604792/WhatsApp_Image_2026-04-17_at_16.39.27_3_yap6tk.jpg"},

{nombre:"Hawas For Him",precio:105000,notas:"Afrutado,Dulce,Cítrico,Canela,Ambarado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776122443/him_r1nif1.jpg"},

{nombre:"Hawas Verde",precio:105000,notas:"Verde,Cítrico,Aromático,Fresco,Almizclado,Amaderado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1777120133/WhatsApp_Image_2026-04-24_at_16.01.32_z8p27z.jpg"},

]

const asrar = [ 
{nombre:"Vanilla Voyage",precio:95000,notas:"Dulce,Avainillado,Gourmand,Ambarado,Almizclado,Floral suave,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433424/voyage_dzoj4n.webp"},

{nombre:"Coffe Blend",precio:95000,notas:"Dulce,Café,Avainillado,Gourmand,Caramelo,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433016/coffe_deuywn.jpg"},

{nombre:"Hikaya",precio:95000,notas:"Dulce,Ámbar,Almizclado,Caramelo,Avainillado,Rosa,Balsámico,Especiado,Amaderado,Animálico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433017/hikaya_jxuvz0.jpg"},

{nombre:"Rey",precio:95000,notas:"Amaderado,Ambarado,Dulce,Especiado,Aromático,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775433017/rey_c8nhbm.jpg"},

]

const dumont = [
{nombre:"Nitro Red",precio:80000,notas:"Afrutado,Acuático,Amaderado,Ámbar,Aromático,Cítrico,Fresco especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1777119994/WhatsApp_Image_2026-04-24_at_14.15.52_esk00h.jpg"},

{nombre:"Nitro White",precio:80000,notas:"Cítrico,Fresco,Aromático,Almizclado,Verde,Limpio", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1777119993/WhatsApp_Image_2026-04-24_at_14.17.32_d7i4nn.jpg"},

]

const bharara = [
{nombre:"Aqua Dubai",precio:110000,notas:"Cítrico,Afrutado,Verde,Aromático,Dulce,Almizclado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775434180/aquadubai_as9ija.webp"},

{nombre:"Amber Gold",precio:110000,notas:"Dulce,Avainillado,Afrutado,Ambarado,Almizclado,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775434189/gold_b1ik82.webp"},

{nombre:"Double Bleu",precio:99000,notas:"Cítrico,Aromático,Amaderado,Fresco especiado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775434192/bleu_c7q2tw.webp"},

{nombre:"Bharara King",precio:99000,notas:"Afrutado,Dulce,Amaderado,Ambarado,Almizclado,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775434195/bhararaking_sb1sri.webp"},

{nombre:"Pistacho Kunafa",precio:99000,notas:"Dulce,Avainillado,Nueces,Cremoso,Gourmand,Atalcado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775434186/kunafa_rnzige.webp"},

]
const armaf = [
{nombre:"Oddysey Homme",precio:72000,notas:"Ámbar,Cálido especiado,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435107/oddyseyhomme_tl6lyi.webp"},

{nombre:"Oddysey Homme White",precio:72000,notas:"Avainillado,Dulce,Ámbar,Aromático,Cálido especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776119738/home_tkns35.jpg"},

{nombre:"Oddysey Aqua",precio:79000,notas:"Marino,Fresco,Cítrico,Aromático,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435101/oddyseyaqua_apglrm.webp"},

{nombre:"Oddysey Bhaamas",precio:82000,notas:"Dulce,Tropical,Avainillado,Afrutado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435110/oddyseybhaamas_cem5sv.webp"},

{nombre:"Oddysey Spectra",precio:82000,notas:"Dulce,Especiado,Amaderado,Avainillado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435087/spectra_n84hrc.webp"},

{nombre:"Oddysey Mega",precio:82000,notas:"Cítrico,Aromático,Verde,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776383134/WhatsApp_Image_2026-04-16_at_20.44.08_lcbfb0.jpg"},

{nombre:"Oddysey Limoni",precio:82000,notas:"Cítrico,Fresco,Aromático,Dulce,Verde", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776121418/limoni_t8dcr3.jpg "},

{nombre:"Oddysey Mandarin",precio:82000,notas:"Cítrico,Dulce,Afrutado,Aromático,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435091/sky_h5o15a.webp"},

{nombre:"Oddysey Mandarin Elixir",precio:82000,notas:"Cítrico,Dulce,Afrutado,Avainillado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776204495/WhatsApp_Image_2026-04-14_at_19.02.29_1_jx4pqg.jpg"},

{nombre:"Club Nuit Intense Man",precio:70000,notas:"Ámbar,Cítrico,Afrutado,Dulce,Animálico,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435444/intenseman_1_zpypnk.webp"},

{nombre:"Club Nuit Urban Elixir",precio:80000,notas:"Aromático,Amaderado,Fresco especiado,Cítrico,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435455/urban_tv2ggk.webp"},

{nombre:"Club Nuit Sillage",precio:82000,notas:"Cítrico,Almizclado,Amaderado,Fresco especiado,Atalcado,Aromático,Ámbar,Afrutados,Florales", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435094/sillage_arnkid.webp"},

{nombre:"Club Nuit Iconic",precio:86000,notas:"Cítrico,Amaderado,Aromático,Fresco especiado,Ámbar,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435126/iconic_sixywj.webp"},

{nombre:"Club Nuit Imperiale",precio:86000,notas:"Floral,Dulce,Avainillado,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776383134/WhatsApp_Image_2026-04-16_at_20.44.08_2_qcwphd.jpg"},

{nombre:"Club Nuit Precieux",precio:86000,notas:"Afrutado,Dulce,Amaderado,Ámbar,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776204495/WhatsApp_Image_2026-04-14_at_19.02.29_adjsr6.jpg"},

{nombre:"Club Nuit Bling",precio:86000,notas:"Dulce,Floral,Afrutado,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776383133/WhatsApp_Image_2026-04-16_at_20.44.08_1_lcwpfd.jpg"},

{nombre:"Club Nuit Maleka",precio:81000,notas:"Dulce,Floral,Afrutado,Atalcado,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435114/maleka_aoucve.webp"},

{nombre:"Club Nuit Untold",precio:81000,notas:"Ámbar,Dulce,Almizclado,Atalcado,Amaderado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776121132/untold_wnxz5c.jpg"},

{nombre:"Yum Yum",precio:81000,notas:"Dulce,Afrutado,Gourmand,Avainillado,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776215602/WhatsApp_Image_2026-04-14_at_22.11.57_1_c9gpnc.jpg"},

{nombre:"Beach Party",precio:92000,notas:"Tropical,DulceH,Coco,Afrutado,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435078/beach_qghkab.webp"},
]

const rayhaan = [
{nombre:"Italia",precio:92000,notas:"Cítrico,Aromático,Floral,Verde,Fresco", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435118/italia_khltzl.webp"},

{nombre:"Terra",precio:89000,notas:"Amaderado,Cítrico,Terroso,Aromático,Musgoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435081/terra_nwlqz0.webp"},

{nombre:"Aquatica",precio:92000,notas:"Marino,Fresco,Cítrico,Verde,Ozónico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435122/acuatica_bism0p.webp"},

{nombre:"Pacific Aura",precio:80000,notas:"Marino,Cítrico,Aromático,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435098/pacific_jiqmqb.webp"},

]

const afnan = [ 
{nombre:"9 PM Elixir",precio:80000,notas:"Cálido especiado,Avainillado,Aromático,Fresco especiado,Cuero,Lavanda,Balsámico,Pachulí,Amaderado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435732/9pmelixir_r4lfar.webp"},

{nombre:"9 PM ",precio:80000,notas:"Dulce,Avainillado,Afrutado,Aromático,Cálido especiado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435736/9pm_ahuhxq.webp"},

{nombre:"9 PM Rebel",precio:80000,notas:"Afrutado,Dulce,Amaderado,Aromático,Ámbar,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435728/9pmrebel_omamyc.webp"},

{nombre:"9 AM Dive",precio:78000,notas:"Marino,Cítrico,Aromático,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435740/9am_wsft3l.webp"},

{nombre:"9 PM Night Out",precio:78000,notas:"Dulce,Ambarado,Avainillado,Especiado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435748/out_x2eqtu.webp"},

{nombre:"Supremacy Collector",precio:78000,notas:"Amaderado,Ahumado,Afrutado,Cítrico,Musgoso,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435743/supremacy_qyopfk.webp"},

{nombre:"Turathi Electric",precio:84000,notas:"Afrutado,Dulce,Ambarado,Almizclado,Fresco,Cítrico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775435724/electric_uxblcy.webp"},

{nombre:"Souvenir Floral Bouquet",precio:84000,notas:"Floral,Dulce,Afrutado,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776206759/WhatsApp_Image_2026-04-14_at_19.23.57_wos4oc.jpg"},

{nombre:"Rare Carbon",precio:84000,notas:"Cuero,Amaderado,Atalcado,Ozónico,Violeta,Animálico,Oud,Acuático,Rosa,Fresco especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776604476/WhatsApp_Image_2026-04-17_at_16.39.27_aeopmk.jpg"},

]

const Paris = [
{nombre:"Minya Coco Lush",precio:60000,notas:"Dulce,Afrutados,Florales,Almizclado,Floral blanco,Almendrado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437762/minya_ebjd98.webp"},

{nombre:"Fayora",precio:89000,notas:"Dulce,Afrutado,Floral,Avainillado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437019/fayora_jmvzbz.webp"},

{nombre:"Fayora Oschino",precio:89000,notas:"Dulce,Afrutado,Floral,Avainillado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776027100/oschino_vr55ml.jpg"},

{nombre:"Khair Confection",precio:73000,notas:"Dulce,Avainillado,Atalcado,Amaderado,Afrutados,Acuático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437029/khair_ppqsvi.webp"},

{nombre:"Qissa Delicius",precio:55000,notas:"Dulce,Avainillado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437043/qissa_l4xubf.webp"},

{nombre:"Khair Pistachio",precio:75000,notas:"Dulce,Avainillado,Nueces,Cremoso,Atalcado,Amaderado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437038/pistacho_g3nzd7.webp"},

{nombre:"Moscow Mule",precio:80000,notas:"Cítrico,Fresco,Aromático,Especiado,Verde", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437033/moscow_w3gk1b.webp"},

{nombre:"Banana Bliss",precio:80000,notas:"Dulce,Afrutado,Tropical,Avainillado,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437006/banana_vn9qxs.webp"},

{nombre:"Dulzura",precio:80000,notas:"Dulce,Avainillado,Cremoso,Almizclado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437015/dulzura_edoecr.webp"},

{nombre:"Khair Felicity",precio:80000,notas:"Dulce,Floral,Avainillado,Afrutado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437024/felicity_h594hf.webp"},

{nombre:"Marshmallow Blush",precio:80000,notas:"Dulce,Afrutado,Almizclado,Cítrico,Floral blanco", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775437010/blush_rk55ql.webp"},

{nombre:"Rifaqat",precio:80000,notas:"Amaderado,Especiado,Ámbar,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776380691/WhatsApp_Image_2026-04-16_at_20.03.01_etxcj7.jpg"},

{nombre:"Taskeen Lactea Divina",precio:80000,notas:"Dulce,Lactónico,Cremoso,Avainillado,Almizclado,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387036/WhatsApp_Image_2026-04-16_at_21.20.04_el0izm.jpg"},

{nombre:"Quissa Pink",precio:80000,notas:"Dulce,Afrutado,Floral,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387070/WhatsApp_Image_2026-04-16_at_21.20.05_1_ivqtvw.jpg"},

{nombre:"Minya Caramel Dulce",precio:80000,notas:"Dulce,Caramelo,Avainillado,Cremoso,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387037/WhatsApp_Image_2026-04-16_at_21.20.05_g1v296.jpg"},

{nombre:"Strawberry",precio:80000,notas:"Afrutado,Dulce,Avainillado,Cremoso,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387037/WhatsApp_Image_2026-04-16_at_21.20.04_1_ljhin7.jpg"},

]

const maison = [
{nombre:"Salvo Elixir",precio:50000,notas:"Ámbar,Amaderado,Fresco especiado,Avainillado,Cálido especiado,Dulce,Tabaco,Pachulí,Atalcado,Balsámico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515001/salvo_bm10ye.webp"},

{nombre:"Salvo Intense",precio:50000,notas:"Ámbar,Amaderado,Fresco especiado,Avainillado,Cálido especiado,Dulce,Tabaco,Pachulí,Atalcado,Balsámico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776215061/WhatsApp_Image_2026-04-14_at_19.43.59_1_fxlji4.jpg "},

{nombre:"Galactic Men",precio:55000,notas:"Tabaco,Dulce,Ambarado,Avainillado,Gourmand,Amaderado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515009/galacticmen_fnankx.webp"},

{nombre:"Luxe",precio:62000,notas:"Dulce,Amaderado,Avainillado,Ámbar,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515007/luxe_swri1e.webp"},

{nombre:"Luxe NY",precio:62000,notas:"Cítrico,Aromático,Amaderado,Fresco especiado,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515006/luxeny_usbw4f.webp"},

{nombre:"Luxe Street",precio:62000,notas:"Aromático,Dulce,Ambarado,Amaderado,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515002/luxestreet_oswzc5.webp"},

{nombre:"Eclipse",precio:69000,notas:"Amaderado,Ámbar,Aromático,Especiado,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515009/eclipse_pboy9n.webp"},

{nombre:"La Vivacite Intensa",precio:58000,notas:"Cítrico,Floral,Almizclado,Fresco,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515001/vivacite_cdzhft.webp"},

{nombre:"Intrude",precio:55000,notas:"Floral blanco,Dulce,Almizclado,Atalcado,Afrutado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515008/intrude_givsor.webp"},

{nombre:"Leonie Intense",precio:55000,notas:"Dulce,Avainillado,Floral,Atalcado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515007/leonie_dwzkoe.webp"},

//{nombre:"Glacier Bold",precio:55000,notas:"Cítrico,Aromático,Fresco,Amaderado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515010/bold_htyknd.webp"},

{nombre:"Toscano Leather",precio:55000,notas:"Cuero,Ahumado,Amaderado,Animalico,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515000/toscano_rgdv7f.webp"},

{nombre:"Spectre Malachite",precio:55000,notas:"Amaderado,Especiado,Ámbar,Aromático,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515000/spectre_nfwl4k.webp"},

{nombre:"Alora",precio:55000,notas:"Dulce,Floral,Afrutado,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515011/alora_dqch5x.webp"},

{nombre:"Jean Love Vibe",precio:55000,notas:"Dulce,Avainillado,Aromático,Ambarado,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515000/vibe_obhyso.webp"},

{nombre:"Jean Love Inmortel",precio:55000,notas:"Amaderado,Aromático,Dulce,Ámbar,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776126162/inmortel_qg0bgx.jpg"},

{nombre:"Jean Love Noir",precio:55000,notas:"Dulce,Avainillado,Ambarado,Especiado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776126163/intense_slh5fi.jpg"},

{nombre:"Your Touch",precio:55000,notas:"Aromático,Amaderado,Cítrico,Especiado,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515011/your_x6d3o4.webp"},

{nombre:"Your Touch Intense",precio:55000,notas:"Ambarado,Dulce,Especiado,Amaderado,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775515008/intense_eymn7y.webp"},

{nombre:"Smoked Oud Vainilla",precio:55000,notas:"Dulce,Gourmand,Amaderado,Oriental,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776604701/WhatsApp_Image_2026-04-17_at_16.39.27_1_mryvjq.jpg"},

{nombre:"Anthena",precio:55000,notas:"Floral,Dulce,Atalcado,Almizclado,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387620/WhatsApp_Image_2026-04-16_at_21.20.03_1_tvacnh.jpg"},
]

const frenchavenue = [
{nombre:"Vulcan Sable ",precio:80000,notas:"Avainillado,Dulce,Ambarado,Especiado,Balsámico,Cálido especiado,Aromático,Pachulí", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517859/vulcansable_gckisb.webp"},

{nombre:"Vulcan Feu ",precio:95000,notas:"Afrutado,Dulce,Floral,Especiado,Ambarado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517860/vulcanfeu_mzbbjl.webp"},

{nombre:"Vulcan Black",precio:95000,notas:"Especiado,Afrutado,Amaderado,Dulce,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517849/vulcanblack_yognvd.webp"},

{nombre:"Liquid Brun",precio:85000,notas:"Dulce,Gourmand,Especiado,Avainillado,Floral,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517863/liquidburn_wbpnqn.webp"},

{nombre:"Liquid Limited Edition",precio:85000,notas:"Dulce,Avainillado,Gourmand,Ambarado,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775516897/limited_cz4y97.jpg"},

{nombre:"Cocoa Morado",precio:85000,notas:"Dulce,Cacao,Avainillado,Almendrado,Afrutado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517864/cocoa_g0u2qp.webp"},

{nombre:"Spectre Ghost ",precio:80000,notas:"Dulce,Avainillado,Amaderado,Atalcado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517851/spectreghost_vdd9fq.webp"},

{nombre:"Atlantis Extait",precio:96000,notas:"Cítrico,Tropical,Afrutado,Dulce,Ambarado,Acuático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517858/atlantisextai_gmxo2y.webp"},

{nombre:"Aether Extrait",precio:95000,notas:"Amaderado,Ambarado,Especiado,Aromático,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517848/aetherextrait_q8enqv.webp"},

{nombre:"Forbidden Fruit ",precio:110000,notas:"Afrutado,Dulce,Gourmand,Floral,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517856/forbiddenfruit_ogi428.webp"},

{nombre:"Magnetiq",precio:110000,notas:"Dulce,Ambarado,Almizclado,Avainillado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517862/magnetiq_aiitko.webp"},

{nombre:"Royal Blend",precio:49000,notas:"Afrutado,Ahumado,Amaderado,Dulce,Cítrico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517853/royal_iebiih.webp"},

{nombre:"Royal Blend Negro",precio:49000,notas:"Especiado,Amaderado,Cuero,Ambarado,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775516898/negro_ao6ts7.jpg"},

{nombre:"Proud of You",precio:49000,notas:"Dulce,Avainillado,Aromático,Ambarado,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517853/proud_igplad.webp"},

{nombre:"Proud of You Amber",precio:49000,notas:"Dulce,Avainillado,Ámbar,Aromático,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776120297/amber_tfpal0.jpg"},

{nombre:"Meringue",precio:80000,notas:"Dulce,Avainillado,Cremoso,Atalcado,Azucarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517855/meringue_bfecc0.webp"},

{nombre:"Azzure Oud",precio:75000,notas:"Oud,Amaderado,Ambarado,Especiado,Balsámico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517848/azzure_nowbhd.webp"},

{nombre:"Veneno",precio:103000,notas:"Dulce,Ambarado,Avainillado,Especiado,Licor", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776021649/veneno_rwoiat.jpg"},

{nombre:"Grecia",precio:103000,notas:"Floral,Dulce,Afrutado,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517856/grecia_ik6asc.webp"},

{nombre:"Creme Of Clouds",precio:103000,notas:"Dulce,Cremoso,Avainillado,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517845/clouds_spse0s.webp"},

{nombre:"Elysia Vanila ",precio:103000,notas:"Dulce,Avainillado,Ambarado,Cremoso,Floral", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775516893/vanila_gbhlg1.jpg"},

{nombre:"Elysia Vanila Sugar",precio:103000,notas:"Dulce,Azucarado,Avainillado,Gourmand,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775516892/sugar_jnfgpz.jpg"},

{nombre:"Veneno Bianco",precio:103000,notas:"Dulce,Cremoso,Avainillado,Floral,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517846/bianco_pc21s7.webp"},

{nombre:"Veneno Scarlet",precio:103000,notas:"Dulce,Afrutado,Ambarado,Avainillado,Floral", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776387802/WhatsApp_Image_2026-04-03_at_17.58.51_xapxai.jpg"},

{nombre:"Safari Breeze",precio:103000,notas:"Cítrico,Fresco,Verde,Aromático,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775517846/breeze_hfmjg6.webp"},

{nombre:"Coconut Leche",precio:103000,notas:"Coco,Dulce,Cremoso,Lactónico,Avainillado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775516893/leche_k7oxco.jpg"},

{nombre:"Wayfarer",precio:80000,notas:"Amaderado,Aromático,Cítrico,Especiado,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775436999/wayfarer_n1nmie.webp"},

]

const Lattafa = [
{nombre:"Yara Elixir",precio:60000,notas:"Avainillado,Caramelo,Floral blanco,Dulce,Afrutados,Ámbar,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523548/yaraelixir_jqrx6g.webp"},

{nombre:"Yara Candy",precio:60000,notas:"Avainillado,Afrutados,Floral blanco,Atalcado,Amaderado,Cítrico,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523549/yaracandy_ouytl6.webp"},

{nombre:"Yara Tous",precio:62000,notas:"Tropical,Afrutado,Floral,Almizclado,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523546/yaratous_admksi.webp"},

{nombre:"Eclaire",precio:76000,notas:"Dulce,Avainillado,Caramelo,Cremoso,Ambarado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523567/eclaire_ajxgcd.webp"},

{nombre:"Eclaire Pistacho",precio:74000,notas:"Dulce,Pistacho,Avainillado,Cremoso,Nueces,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522332/eclairep_et7vvf.jpg"},

{nombre:"Asad Elixir",precio:80000,notas:"Ámbar,Especiado,Avainillado,Amaderado,Balsámico,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523537/asadelixir_ybhwmy.webp"},

{nombre:"Asad Burbon",precio:75000,notas:"Ambarado,Licoroso,Avainillado,Dulce,Especiado,Amaderado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523545/asadburnon_ri5zbf.webp"},

{nombre:"Asad Zanibar",precio:75000,notas:"Tropical,Coco,Amaderado,Aromático,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523535/asadzansibar_le2l9x.webp"},

{nombre:"Asad Men",precio:75000,notas:"Cálido especiado,Ámbar,Avainillado,Amaderado,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523537/asadmen_om2s2q.webp"},

{nombre:"Bade Al Oud Amethyst",precio:64000,notas:"Oud,Rosa,Ámbar,Dulce,Amaderado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523539/amethyst_scpvd3.webp"},

{nombre:"Khamrah Dunkan",precio:66000,notas:"Ahumado,Dulce,Especiado,Ambarado,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523578/dunkan_hmfpiw.webp"},

{nombre:"Khamrah",precio:66000,notas:"Dulce,Avainillado,Canela,Ambarado,Especiado,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522317/khamrah_ntd1ev.jpg"},

{nombre:"Khamrah Qahwa",precio:66000,notas:"Café,Dulce,Avainillado,Especiado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522320/qahwa_gvx4iw.jpg"},

{nombre:"Bade Al Oud Honor",precio:68000,notas:"Amaderado,Especiado,Ámbar,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522327/honor_pffqsf.jpg"},

{nombre:"Oud For Glory",precio:64000,notas:"Oud,Ahumado,Amaderado,Especiado,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522330/glory_cjunnk.jpg"},

{nombre:"Bade Al Oud Sublime",precio:64000,notas:"Afrutado,Dulce,Floral,Ambarado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523553/sublime_noi42l.webp"},

{nombre:"Noble Blush",precio:64000,notas:"Floral,Dulce,Afrutado,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523573/blush_1_oqd1qs.webp"},

{nombre:"Opulent Dubai",precio:70000,notas:"Amaderado,Ámbar,Especiado,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522323/opulent_z403yl.jpg"},

{nombre:"Liam Blue Shine",precio:78000,notas:"Cítrico,Marino,Aromático,Fresco,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523557/liam_phhyow.webp"},

{nombre:"Nebras Elixir",precio:85000,notas:"Dulce,Chocolate,Avainillado,Gourmand,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522342/nebras_ba6hko.jpg"},

{nombre:"Eclaire Banoffi",precio:74000,notas:"Banana,Dulce,Avainillado,Caramelo,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523574/banoffi_j8twxl.webp"},

{nombre:"His Confession",precio:78000,notas:"Amaderado,Especiado,Aromático,Ámbar,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523560/His_ygtnvo.webp"},

{nombre:"The Kingdom Fem",precio:60000,notas:"Amaderado,Ámbar,Especiado,Aromático,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523559/kingdom_jw1q04.webp"},

{nombre:"Mayar Cherry Intense",precio:64000,notas:"Cereza,Dulce,Avainillado,Afrutado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523569/cherry_wi2uop.webp"},

//{nombre:"Musaman",precio:60000,notas:"Amaderado,Especiado,Ámbar,Dulce,Oud", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523555/musaman_q2tyrn.webp"},

{nombre:"Qaed Al Foursan Unlimited",precio:50000,notas:"Coco,Dulce,Tropical,Avainillado,Afrutado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523565/foursan_yoxqut.webp"},

{nombre:"Atlas",precio:78000,notas:"Marino,Salado,Mineral,Ambarado,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523576/atlas_wtxflp.webp"},

{nombre:"Emaan",precio:78000,notas:"Floral blanco,Cítrico,Almizclado,Dulce,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523567/emaan_jwh2he.webp"},

{nombre:"Angham",precio:78000,notas:"Dulce,Avainillado,Floral,Ambarado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523541/angham_ampr32.webp"},

{nombre:"Fakhar Black",precio:78000,notas:"Aromático,Cítrico,Amaderado,Fresco especiado,Ámbar", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523565/fakharblack_vcpph5.webp"},

{nombre:"Fakhar Platin",precio:78000,notas:"Cítrico,Aromático,Fresco,Amaderado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522318/platin_riqymz.jpg"},

{nombre:"Brioche Vainille",precio:78000,notas:"Dulce,Avainillado,Panadero,Cremoso,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523571/brioche_uty5jt.webp"},

{nombre:"Ameerat Arab",precio:78000,notas:"Floral,Almizclado,Dulce,Afrutado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523544/arab_rornro.webp"},

{nombre:"Sakeena",precio:78000,notas:"Dulce,Afrutado,Floral,Almizclado,Ambarado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523554/sakeena_gs4uee.webp"},

{nombre:"Ansaam Gold",precio:78000,notas:"Dulce,Avainillado,Ámbar,Floral,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523542/ansaam_hpjeoa.webp"},

{nombre:"Now Women",precio:78000,notas:"Afrutado,Dulce,Floral,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775523551/women_jhzg4v.webp"},

{nombre:"Angham Second",precio:78000,notas:"Dulce,Avainillado,Ambarado,Floral,Cremoso", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522313/second_piwtxt.jpg"},

{nombre:"Dalal Lattafa",precio:78000,notas:"Caramelo,Dulce,Ambarado,Avainillado,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522314/dalal_bnhsfk.jpg"},

{nombre:"Habik",precio:78000,notas:"Amaderado,Especiado,Ámbar,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1775522316/habik_ifldss.jpg"},

{nombre:"Habik Fem",precio:78000,notas:"Floral,Dulce,Almizclado,Afrutado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776215681/WhatsApp_Image_2026-04-14_at_22.11.57_voslez.jpg"},

{nombre:"Musaman",precio:78000,notas:"Amaderado,Especiado,Oud,Ámbar,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776120429/musaman_ex3orc.jpg"},

{nombre:"Musaman Black Intense",precio:78000,notas:"Amaderado,Especiado,Oud,Ámbar,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776242206/WhatsApp_Image_2026-04-14_at_23.21.54_gqtlrz.jpg"},

{nombre:"Yara Rosa ",precio:78000,notas:"Dulce,Afrutado,Floral,Atalcado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776123274/rosa_vchzva.jpg"},

{nombre:"Petra",precio:78000,notas:"Floral,Dulce,Afrutado,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776123277/petra_wvp5kz.jpg"},

{nombre:"Mayar",precio:78000,notas:"Floral,Afrutado,Dulce,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776207025/WhatsApp_Image_2026-04-14_at_19.43.59_xpqz0t.jpg"},

{nombre:"Ansaam Silver",precio:78000,notas:"Aromático,Dulce,Avainillado,Ámbar,Especiado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776123284/silver_safkte.jpg"},

{nombre:"The Kingdom",precio:78000,notas:"Amaderado,Ámbar,Especiado,Aromático,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776207022/WhatsApp_Image_2026-04-14_at_19.43.58_yukkwx.jpg"},

{nombre:"Art Of Universe",precio:78000,notas:"Amaderado,Especiado,Ámbar,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776207023/WhatsApp_Image_2026-04-14_at_19.43.58_1_upg96f.jpg"},

{nombre:"Al Quiam Gold",precio:78000,notas:"Cuero,Amaderado,Ámbar,Especiado,Dulce", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776123292/gold_vfmc0s.jpg"},

{nombre:"Shahem Gold",precio:78000,notas:"Afrutado,Dulce,Amaderado,Ámbar,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776382520/WhatsApp_Image_2026-04-16_at_20.33.54_1_cgd1k1.jpg"},

{nombre:"Teriaq Intense",precio:78000,notas:"Dulce,Ambarado,Avainillado,Especiado,Balsámico", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776382520/WhatsApp_Image_2026-04-16_at_20.33.54_fcdxy9.jpg"},

{nombre:"Vintage Radio",precio:78000,notas:"Amaderado,Avainillado,Dulce,Especiado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776207024/WhatsApp_Image_2026-04-14_at_19.43.58_2_xwp09e.jpg"},

{nombre:"Fakhar Femenino",precio:78000,notas:"Floral blanco,Dulce,Cítrico,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776386716/WhatsApp_Image_2026-04-16_at_21.20.02_uz7k4d.jpg"},

{nombre:"Rimaah",precio:78000,notas:"Floral,Dulce,Ambarado,Almizclado,Atalcado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776386717/WhatsApp_Image_2026-04-16_at_21.20.02_1_jwudlj.jpg"},

{nombre:"Jasoor",precio:78000,notas:"Amaderado,Especiado,Ámbar,Dulce,Aromático", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776386716/WhatsApp_Image_2026-04-16_at_21.20.03_nmya1a.jpg"},


]

const milano = [
{nombre:"Game Of Spades King",precio:78000,notas:"Afrutado,Dulce,Ambarado,Amaderado,Almizclado,Tropical", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776605518/WhatsApp_Image_2026-04-18_at_18.18.24_wqptgm.jpg"},

{nombre:"Game Of Spades Full House",precio:78000,notas:"Dulce,Avainillado,Ambarado,Especiado,Aromático,Gourmand", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776605516/WhatsApp_Image_2026-04-18_at_18.18.24_1_wunlas.jpg"},

{nombre:"Game Of Spades Wildcard",precio:78000,notas:"Cítrico,Aromático,Amaderado,Fresco especiado,Almizclado", imagen:"https://res.cloudinary.com/dcwhfsxex/image/upload/v1776605517/WhatsApp_Image_2026-04-18_at_18.18.25_mobr5d.jpg"},

]

// ================== CARRITO (LOCAL STORAGE) ==================

let carrito = JSON.parse(localStorage.getItem("carrito")) || {}

// ================== CREAR CATALOGO ==================

function crearCatalogo(lista,contenedor){

const div = document.getElementById(contenedor)
if(!div) return

div.innerHTML = ""

lista.forEach(item=>{
div.innerHTML += `
<div class="card" data-nombre="${item.nombre}">
${item.stock === "no" ? '<div class="sin-stock">SIN STOCK</div>' : ''}
<img src="${item.imagen}" loading="lazy">
<h3>${item.nombre}</h3>
${item.ml ? `<p class="ml-perfume">${item.ml} ml</p>` : ''}
<div class="precio-container">

    <div class="precio-principal">
        $${formatearPrecio(redondearMiles(item.precio * 1.25))}
        <span class="cuotas">3 cuotas sin interés</span>
    </div>

    <div class="precio-secundario">
        $${formatearPrecio(item.precio)} en efectivo / transferencia
    </div>

</div>

${item.notas && item.notas.trim() && item.notas.trim() !== "." ? `
<button class="detalles" onclick="vernotas('${item.nombre}','${item.notas}','${item.imagen}')">
Ver más
</button>` : ''}

<button class="agregar"
${item.stock === "no" ? "disabled" : ""}
onclick="${item.stock === "no" ? "" : `agregarCarrito('${item.nombre}',${item.precio},'${item.imagen}', this)`}">
    <span class="texto">Agregar al carrito</span>
    <span class="carrito-icono-btn">🛒</span>
</button>


</div>
`
})

}

// ================== CARGAR CATALOGOS ==================

crearCatalogo(masvendidos,"catalogo")
crearCatalogo(Paris,"paris")
crearCatalogo(frenchavenue,"french")
crearCatalogo(maison,"maison")
crearCatalogo(bharara,"bharara")
crearCatalogo(armaf,"armaf")
crearCatalogo(afnan,"afnan")
crearCatalogo(asrar,"asrar")
crearCatalogo(rasasi,"rasasi")
crearCatalogo(rayhaan,"rayhaan")
crearCatalogo(Lattafa,"lattafa")
crearCatalogo(milano,"milano")
crearCatalogo(dumont,"dumont")

// ================== AGREGAR AL CARRITO ==================

function agregarCarrito(nombre,precio,imagen, boton){

  // 🔥 animación carrito
    if(boton){
        boton.classList.add("animado")

        setTimeout(()=>{
        boton.classList.remove("animado")
        }, 600)
    }

    if(carrito[nombre]){
        carrito[nombre].cantidad++
    }else{
        carrito[nombre]={
        precio:precio,
        cantidad:1,
        imagen:imagen
        }
    }

    actualizarCarrito()
}

// ================== ACTUALIZAR CARRITO ==================

function actualizarCarrito(){

let lista=document.getElementById("listaCarrito")
let totalTarjeta = 0
let totalEfectivo = 0
let contador=0

// CALCULAR SIEMPRE (aunque no exista el modal)
for(let item in carrito){
let datos=carrito[item]
totalEfectivo += datos.precio * datos.cantidad
totalTarjeta += redondearMiles(datos.precio * 1.25) * datos.cantidad
contador+=datos.cantidad
}

let contadorHTML = document.getElementById("contador")
if(contadorHTML){
    contadorHTML.innerText = contador

  // 🔥 animación rebote
    contadorHTML.classList.add("animado")

    setTimeout(()=>{
        contadorHTML.classList.remove("animado")
    }, 400)
}

// ACTUALIZAR MODAL (SI EXISTE)
if(lista){
lista.innerHTML=""

for(let item in carrito){
let datos=carrito[item]

lista.innerHTML+=`
<li class="item-carrito">
<img src="${datos.imagen}" class="img-carrito">
<div class="info">
${item} x${datos.cantidad}<br>
$${formatearPrecio(datos.precio * datos.cantidad)}
</div>
</li>
`
}
document.getElementById("totalTarjeta").innerText = formatearPrecio(totalTarjeta)
document.getElementById("totalEfectivo").innerText = formatearPrecio(totalEfectivo)
}

// GUARDAR SIEMPRE
localStorage.setItem("carrito", JSON.stringify(carrito))
}

// ================== MODAL CARRITO ==================

function abrirCarrito(){
document.getElementById("modalCarrito")?.classList.add("activo")
}

function cerrarCarrito(){
document.getElementById("modalCarrito")?.classList.remove("activo")
}

// ================== COLORES NOTAS ==================

const coloresNotas = {
  "afrutados": "#e8654a",
  "afrutado": "#e8654a",
  "amaderado": "#8B5E3C",
  "floral blanco": "#cec8c0",
  "floral": "#e8a4b8",
  "atalcado": "#b8aea6",
  "rosas": "#c4426e",
  "rosa": "#c4426e",
  "dulce": "#d4698a",
  "almizclado": "#9e9e9e",
  "almizcle": "#9e9e9e",
  "avainillado": "#c9a87c",
  "vainilla": "#c9a87c",
  "fresco": "#7bbfbe",
  "cálido especiado": "#8b5a2b",
  "especiado": "#a0522d",
  "acuático": "#5b9bd5",
  "marino": "#4682b4",
  "cítrico": "#e8c830",
  "limón": "#ffe066",
  "naranja": "#ff8c42",
  "bergamota": "#c8a84b",
  "manzana": "#c84b4b",
  "oriental": "#c8860a",
  "ámbar": "#d4882e",
  "ambar": "#d4882e",
  "oud": "#4a2e1a",
  "sándalo": "#d2a679",
  "cedro": "#a0785a",
  "patchouli": "#6b4226",
  "vetiver": "#7a6652",
  "incienso": "#b8860b",
  "cuero": "#8b4513",
  "ahumado": "#555555",
  "musgo": "#6b8e23",
  "mentolado": "#40e0d0",
  "herbal": "#556b2f",
  "tropical": "#ff8c00",
  "jengibre": "#d4a040",
  "pimienta": "#8a5030",
  "canela": "#a0522d",
  "cardamomo": "#6b8c54",
  "café": "#5c3317",
  "caramelo": "#c87832",
  "tonka": "#c0a060",
  "melocotón": "#ffaa88",
  "frambuesa": "#c43060",
  "ciruela": "#884898",
  "aromático": "#7a9e5a",
  "mineral": "#7a8fa0",
  "especiado suave": "#c09060",
  "animálico": "#6b4a30",
  "salado": "#8aafc0",
  "verde": "#5a8a4a",
  "fresco especiado": "#6a9e8a",
  "coco": "#d4c4a0",
  "ambarado": "#d4882e",
  "musgoso": "#4a6e30",
  "terroso": "#8b7355",
  "pachulí": "#6b4226",
  "ozónico": "#a0c4d8",
  "florales": "#e8a4b8",
  "lavanda": "#9b7fc4",
  "balsámico": "#a07840",
  "almendrado": "#c4a882",
  "nueces": "#a07840",
  "cremoso": "#e8d8b0",
  "tabaco": "#7a5c30",
  "gourmand": "#d4882e",
  "animalico": "#6b4a30",
  "cacao": "#5c3317",
  "azucarado": "#f0c8a0",
  "licor": "#8b2040",
  "lactónico": "#f0e8d8",
  "floral suave": "#f0c8d8",
  "pistacho": "#8faa60",
  "licoroso": "#8b2040",
  "banana": "#f0d050",
  "cereza": "#c02040",
  "panadero": "#d4a870",
}

// ================== MODAL NOTAS ==================

function vernotas(nombre, texto, imagen){

document.getElementById("modalTitulo").innerText = nombre
document.getElementById("modalImagen").src = imagen

const contenedor = document.getElementById("modalTexto")

if(texto && texto.includes(",")){
  const notas = texto.split(",").map(n => n.trim()).filter(n => n)
  const total = notas.length
  contenedor.innerHTML = notas.map((nota, i) => {
    const color = coloresNotas[nota.toLowerCase()] || "#8a6233"
    const width = Math.round(100 - (i * (40 / total)))
    return `<div class="nota-bar" style="background:${color};width:${width}%">${nota}</div>`
  }).join("")
} else {
  contenedor.innerHTML = ""
  contenedor.innerText = texto || ""
}

document.getElementById("modalnotas").classList.add("activo")
}

function cerrarnotas(){
document.getElementById("modalnotas").classList.remove("activo")
}

// ================== MENU ==================

function toggleMenu(){
const navbar = document.querySelector(".navbar")
navbar.classList.toggle("activo")
}

// ================== DROPDOWN MARCAS ==================

document.addEventListener("DOMContentLoaded", () => {
  const navMarcas = document.querySelector(".nav-marcas")
  const btn = document.querySelector(".marcas-btn")
  if (!btn) return

  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    navMarcas.classList.toggle("abierto")
  })

  document.addEventListener("click", () => {
    navMarcas.classList.remove("abierto")
  })
})

// ================== VACIAR ==================

function vaciarCarrito(){
carrito = {}
actualizarCarrito()
}

// ================== ENVIAR WHATSAPP ==================

function enviarPedido(){

let formaPago = document.getElementById("formaPago").value

let mensaje="Hola quiero pedir:\n"
let total = 0

for(let item in carrito){
let datos=carrito[item]

let precio = datos.precio

if(formaPago === "tarjeta"){
precio = redondearMiles(datos.precio * 1.25)
}

mensaje+=`${item} x${datos.cantidad} - $${formatearPrecio(precio * datos.cantidad)}\n`
total+=precio * datos.cantidad
}

mensaje+=`\nTotal: $${total}`

if(formaPago === "tarjeta"){
mensaje+=`\nForma de pago: Tarjeta (3 cuotas sin interés)`
}else{
mensaje+=`\nForma de pago: Efectivo / Transferencia (25% OFF)`
}

// Mostrar modal de confirmacion antes de enviar
document.getElementById("modalConfirmacion").classList.add("activo")
document.getElementById("btnConfirmarPedido").onclick = function(){
    cerrarConfirmacion()
    // 🔥 NUEVA LÓGICA COMPATIBLE CON IPHONE
    if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(mensaje).then(()=>{
            window.open(`https://ig.me/m/raschiani_perfumeria`)
        }).catch(()=>{
            mostrarMensajeManual(mensaje)
        })
    }else{
        mostrarMensajeManual(mensaje)
    }
}

}

function cerrarConfirmacion(){
    document.getElementById("modalConfirmacion").classList.remove("activo")
}

// 🔥 FUNCIÓN EXTRA (NO ROMPE NADA)
function mostrarMensajeManual(mensaje){
    prompt("Copiá tu pedido 👇", mensaje)
    window.open(`https://ig.me/m/raschiani_perfumeria`)
}
// ================== CERRAR MODAL AL HACER CLICK AFUERA ==================

window.addEventListener("click", function(e){

    const modalCarrito = document.getElementById("modalCarrito")
    const modalNotas = document.getElementById("modalnotas")

    // cerrar carrito
    if(e.target === modalCarrito){
        cerrarCarrito()
    }

    // 🔥 cerrar notas
    if(e.target === modalNotas){
        cerrarnotas()
    }

    const modalPerfumero = document.getElementById("modalPerfumero")
    if(e.target === modalPerfumero){ cerrarPerfumero() }

})
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        cerrarCarrito()
        cerrarnotas()
        cerrarPerfumero()
    }
})

const elementos = document.querySelectorAll(".card")

const mostrarElementos = () => {
  const trigger = window.innerHeight * 0.85

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top

        if(top < trigger){
        el.classList.add("visible")
        }
    })
}

window.addEventListener("scroll", mostrarElementos)
window.addEventListener("load", mostrarElementos)

function formatearPrecio(numero){
return numero.toLocaleString("es-AR")
}

//CARRUSEL
const track = document.getElementById("carouselTrack")
const carousel = document.getElementById("carousel")

if(track){

let index = 0
let autoPlay
let startX = 0
let isDragging = false

// 🔥 CLONAR ELEMENTOS (infinito real)
const items = Array.from(track.children)
items.forEach(item => {
let clone = item.cloneNode(true)
track.appendChild(clone)
})

// 🔥 ancho real
const getWidth = () => track.children[0].offsetWidth + 20

function mover(){
index++
track.style.transition = "transform 0.5s ease"
track.style.transform = `translateX(-${index * getWidth()}px)`

// reset invisible (infinito)
if(index >= items.length){
setTimeout(()=>{
track.style.transition = "none"
index = 0
track.style.transform = `translateX(0px)`
},500)
}
}

// 🔥 autoplay
function iniciarAutoPlay(){
autoPlay = setInterval(mover, 3000)
}

function detenerAutoPlay(){
clearInterval(autoPlay)
}

// 👉 PAUSA HOVER
carousel.addEventListener("mouseenter", detenerAutoPlay)
carousel.addEventListener("mouseleave", iniciarAutoPlay)

// 👉 SWIPE MOBILE
carousel.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX
isDragging = true
detenerAutoPlay()
})

carousel.addEventListener("touchmove", e=>{
if(!isDragging) return
let moveX = e.touches[0].clientX
let diff = startX - moveX

track.style.transform = `translateX(-${index * getWidth() + diff}px)`
})

carousel.addEventListener("touchend", e=>{
isDragging = false
let endX = e.changedTouches[0].clientX
let diff = startX - endX

if(diff > 50){
index++
}else if(diff < -50 && index > 0){
index--
}

track.style.transition = "transform 0.4s ease"
track.style.transform = `translateX(-${index * getWidth()}px)`

iniciarAutoPlay()
})

// iniciar
iniciarAutoPlay()
}

async function cargarPrecios(){

try{
const res = await fetch("https://opensheet.elk.sh/1b64tYrrXdsgR0wwhpVIR9w4jBbLuHD1PUOXe4LcT6OY/precio")
const data = await res.json()

const listas = [masvendidos, rasasi, asrar, bharara, armaf, afnan, Paris, maison, frenchavenue, Lattafa, rayhaan, milano, dumont]

listas.forEach(lista=>{
lista.forEach(producto=>{

let encontrado = data.find(p => p.nombre === producto.nombre)

if(encontrado){
producto.precio = parseInt(encontrado.precio)
producto.stock = encontrado.stock
if(encontrado.ml) producto.ml = encontrado.ml
}

})
})

// recargar catálogo
crearCatalogo(masvendidos,"catalogo")
crearCatalogo(Paris,"paris")
crearCatalogo(frenchavenue,"french")
crearCatalogo(maison,"maison")
crearCatalogo(bharara,"bharara")
crearCatalogo(armaf,"armaf")
crearCatalogo(afnan,"afnan")
crearCatalogo(asrar,"asrar")
crearCatalogo(rasasi,"rasasi")
crearCatalogo(rayhaan,"rayhaan")
crearCatalogo(Lattafa,"lattafa")
crearCatalogo(milano,"milano")
crearCatalogo(dumont,"dumont")

}catch(error){
console.log("Error cargando precios:", error)
}
}

function redondearMiles(numero){
return Math.floor(numero / 100) * 100
}

// ================== INICIAR ==================
cargarPrecios()
setInterval(cargarPrecios, 5000) // cada 5 segundos
actualizarCarrito()

// ================== BUSCADOR ==================

const todosPerfumes = [
  ...masvendidos.map(p => ({...p, marca:'Más Vendidos',    pagina:'index.html'})),
  ...rasasi.map(p =>      ({...p, marca:'Rasasi',           pagina:'rasasi.html'})),
  ...asrar.map(p =>       ({...p, marca:'Maison Asrar',     pagina:'asrar.html'})),
  ...bharara.map(p =>     ({...p, marca:'Bharara',          pagina:'bharara.html'})),
  ...armaf.map(p =>       ({...p, marca:'Armaf',            pagina:'armaf.html'})),
  ...rayhaan.map(p =>     ({...p, marca:'Rayhaan',          pagina:'rayhaan.html'})),
  ...afnan.map(p =>       ({...p, marca:'Afnan',            pagina:'afnan.html'})),
  ...Paris.map(p =>       ({...p, marca:'Paris Corner',     pagina:'paris.html'})),
  ...maison.map(p =>      ({...p, marca:'Maison Alhambra',  pagina:'maison.html'})),
  ...frenchavenue.map(p =>({...p, marca:'French Avenue',    pagina:'french.html'})),
  ...Lattafa.map(p =>     ({...p, marca:'Lattafa',          pagina:'lattafa.html'})),
  ...milano.map(p =>      ({...p, marca:'Jo Milano',        pagina:'milano.html'})),
  ...dumont.map(p =>      ({...p, marca:'Dumont',           pagina:'dumont.html'})),
]

function buscarPerfume(q) {
  const resultados = document.getElementById('buscadorResultados')
  if (!resultados) return
  const texto = q.trim().toLowerCase()
  if (!texto) { resultados.style.display = 'none'; return }

  const encontrados = todosPerfumes.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  ).slice(0, 8)

  if (!encontrados.length) {
    resultados.innerHTML = '<div class="busq-vacio">Sin resultados</div>'
    resultados.style.display = 'block'
    return
  }

  resultados.innerHTML = encontrados.map(p => `
    <div class="busq-item" onclick="irAPerfume('${encodeURIComponent(p.nombre)}','${p.pagina}')">
      <img src="${p.imagen}" onerror="this.style.display='none'">
      <div class="busq-info">
        <span class="busq-nombre">${p.nombre}</span>
        <span class="busq-marca">${p.marca}</span>
      </div>
      <span class="busq-precio">$${formatearPrecio(p.precio)}</span>
    </div>
  `).join('')
  resultados.style.display = 'block'
}

function irAPerfume(nombreCodificado, pagina) {
  cerrarBuscador()
  const actualPage = location.pathname.split('/').pop() || 'index.html'
  if (actualPage === pagina) {
    resaltarCard(decodeURIComponent(nombreCodificado))
  } else {
    location.href = `${pagina}?perfume=${nombreCodificado}`
  }
}

function resaltarCard(nombre) {
  const card = [...document.querySelectorAll('.card')].find(
    c => c.dataset.nombre === nombre
  )
  if (!card) return
  card.scrollIntoView({ behavior:'smooth', block:'center' })
  card.classList.add('card-highlight')
  setTimeout(() => card.classList.remove('card-highlight'), 2000)
}

// Al cargar la página, verificar si viene con ?perfume=
window.addEventListener('load', () => {
  const params = new URLSearchParams(location.search)
  const perfume = params.get('perfume')
  if (perfume) setTimeout(() => resaltarCard(decodeURIComponent(perfume)), 400)
})

function abrirBuscador() {
  const overlay = document.getElementById('busqOverlay')
  if (!overlay) return
  overlay.classList.add('activo')
  document.body.style.overflow = 'hidden'
  setTimeout(() => document.getElementById('buscadorInput')?.focus(), 250)
}

function cerrarBuscador() {
  const overlay = document.getElementById('busqOverlay')
  const input = document.getElementById('buscadorInput')
  const resultados = document.getElementById('buscadorResultados')
  if (overlay) overlay.classList.remove('activo')
  if (input) input.value = ''
  if (resultados) resultados.style.display = 'none'
  document.body.style.overflow = ''
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { cerrarBuscador(); cerrarBuscadorPerfumero() }
})

// ================== PERFUMERO ==================

const PERF_COLORES = [
  { color: "Violeta",     imagen: "img/perfumero1.jpeg",     desc: "Perfumero Violeta — 5ml" },
  { color: "Negro",    imagen: "img/perfumero-negro.jpg",    desc: "Perfumero Negro — 5ml" },
  { color: "Blanco",   imagen: "img/perfumero-blanco.jpg",   desc: "Perfumero Blanco — 5ml" },
  { color: "Plateado", imagen: "img/perfumero-plateado.jpg", desc: "Perfumero Plateado — 5ml" },
]

const PERF_TAMANIOS = [
  { label: "5ml — Vacío",        precio: 8000,  requierePerfume: false },
  { label: "5ml — Con perfume",  precio: 17000, requierePerfume: true  },
]

let perfumeroSeleccionado = null
let perfSlideIdx = 0

function crearCardPerfumero() {
  const catalogo = document.getElementById("catalogo")
  if (!catalogo) return
  const cardHTML = `
    <div class="card card-perfumero">
      <img src="img/perfumero1.jpeg" loading="lazy" alt="Perfumero personalizado">
      <h3>Decants y Perfumeros</h3>
      <p class="perf-card-desc">Elegí tu fragancia favorita y la cargamos en un elegante perfumero para llevarlo a donde quieras.</p>
      <button class="detalles" onclick="abrirPerfumero()">Ver opciones</button>
    </div>
  `
  const primerCard = catalogo.querySelector(".card")
  if (primerCard) {
    primerCard.insertAdjacentHTML("afterend", cardHTML)
  } else {
    catalogo.innerHTML += cardHTML
  }
}

function abrirPerfumero() {
  const slidesWrap = document.getElementById("perfSlidesWrap")
  const dotsEl = document.getElementById("perfDots")
  if (slidesWrap) {
    slidesWrap.innerHTML = PERF_COLORES.map(c => `
      <div class="perf-slide">
        <img src="${c.imagen}" alt="${c.color}">
        <p class="perf-desc">${c.desc}</p>
      </div>
    `).join("")
  }
  if (dotsEl) {
    dotsEl.innerHTML = PERF_COLORES.map((_, i) =>
      `<span class="perf-dot" onclick="perf_goTo(${i})"></span>`
    ).join("")
  }
  const select = document.getElementById("perfML")
  if (select) {
    select.innerHTML = PERF_TAMANIOS.map((t, i) =>
      `<option value="${i}">${t.label} — $${formatearPrecio(t.precio)}</option>`
    ).join("")
  }
  perfumeroSeleccionado = null
  const img = document.getElementById("perfElegidoImg")
  const nombreEl = document.getElementById("perfElegidoNombre")
  if (img) { img.style.display = "none"; img.src = "" }
  if (nombreEl) nombreEl.textContent = "Ninguno seleccionado"
  perf_goTo(0)
  actualizarEstadoPerfumero()
  document.getElementById("modalPerfumero")?.classList.add("activo")
}

function actualizarEstadoPerfumero() {
  const idx = parseInt(document.getElementById("perfML")?.value ?? 0)
  const talle = PERF_TAMANIOS[idx]
  if (!talle) return
  const buscador = document.querySelector(".btn-elegir-perfume")
  const elegido = document.getElementById("perfElegido")
  const btn = document.getElementById("btnAgregarPerfumero")
  if (talle.requierePerfume) {
    if (buscador) buscador.style.display = ""
    if (elegido) elegido.style.display = ""
    if (btn) btn.disabled = !perfumeroSeleccionado
  } else {
    if (buscador) buscador.style.display = "none"
    if (elegido) elegido.style.display = "none"
    if (btn) btn.disabled = false
  }
}

function cerrarPerfumero() {
  document.getElementById("modalPerfumero")?.classList.remove("activo")
}

function perf_goTo(i) {
  perfSlideIdx = i
  document.querySelectorAll(".perf-slide").forEach((s, idx) =>
    s.classList.toggle("activo", idx === i)
  )
  document.querySelectorAll(".perf-dot").forEach((d, idx) =>
    d.classList.toggle("activo", idx === i)
  )
}

function perf_prev() {
  const total = document.querySelectorAll(".perf-slide").length
  perf_goTo((perfSlideIdx - 1 + total) % total)
}

function perf_next() {
  const total = document.querySelectorAll(".perf-slide").length
  perf_goTo((perfSlideIdx + 1) % total)
}

function abrirBuscadorPerfumero() {
  const overlay = document.getElementById("busqPerfOverlay")
  if (!overlay) return
  overlay.classList.add("activo")
  document.body.style.overflow = "hidden"
  setTimeout(() => document.getElementById("busqPerfInput")?.focus(), 250)
}

function cerrarBuscadorPerfumero() {
  const overlay = document.getElementById("busqPerfOverlay")
  const input = document.getElementById("busqPerfInput")
  const resultados = document.getElementById("busqPerfResultados")
  if (overlay) overlay.classList.remove("activo")
  if (input) input.value = ""
  if (resultados) resultados.style.display = "none"
  document.body.style.overflow = ""
}

function buscarParaPerfumero(q) {
  const resultados = document.getElementById("busqPerfResultados")
  if (!resultados) return
  const texto = q.trim().toLowerCase()
  if (!texto) { resultados.style.display = "none"; return }

  const encontrados = todosPerfumes.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  ).slice(0, 8)

  if (!encontrados.length) {
    resultados.innerHTML = '<div class="busq-vacio">Sin resultados</div>'
    resultados.style.display = "block"
    return
  }

  resultados.innerHTML = encontrados.map(p => `
    <div class="busq-item" onclick="elegirPerfumeParaPerfumero('${encodeURIComponent(p.nombre)}','${p.imagen}')">
      <img src="${p.imagen}" onerror="this.style.display='none'">
      <div class="busq-info">
        <span class="busq-nombre">${p.nombre}</span>
        <span class="busq-marca">${p.marca}</span>
      </div>
      <span class="busq-precio">$${formatearPrecio(p.precio)}</span>
    </div>
  `).join("")
  resultados.style.display = "block"
}

function elegirPerfumeParaPerfumero(nombreCodificado, imagen) {
  const nombre = decodeURIComponent(nombreCodificado)
  perfumeroSeleccionado = { nombre, imagen }

  const img = document.getElementById("perfElegidoImg")
  const nombreEl = document.getElementById("perfElegidoNombre")
  if (img) { img.src = imagen; img.style.display = "block" }
  if (nombreEl) nombreEl.textContent = nombre

  cerrarBuscadorPerfumero()
  actualizarEstadoPerfumero()
}

function agregarPerfumeroCarrito(boton) {
  const idx = parseInt(document.getElementById("perfML")?.value ?? 0)
  const talle = PERF_TAMANIOS[idx]
  if (!talle) return
  if (talle.requierePerfume && !perfumeroSeleccionado) return

  const colorActual = PERF_COLORES[perfSlideIdx]
  const color = colorActual?.color ?? ""
  const imgPerfumero = colorActual?.imagen ?? "img/perfumero1.jpeg"

  const nombre = talle.requierePerfume
    ? `Perfumero ${color} 5ml — ${perfumeroSeleccionado.nombre}`
    : `Perfumero ${color} 5ml — Vacío`
  const imagen = talle.requierePerfume
    ? perfumeroSeleccionado.imagen
    : imgPerfumero

  agregarCarrito(nombre, talle.precio, imagen, boton)
  cerrarPerfumero()
}
