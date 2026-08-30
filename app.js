    // The Rulers Google Sheet is the source of truth. This snapshot is only used if it is temporarily unavailable.
    const localRulers = [{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Narmer (Menes?)","dates":"c.3000 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Aha (Meni)","dates":"c.2990 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Djer (Iti)","dates":"c.2970 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Djet (Wadji)","dates":"c.2955 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Queen Merneith (regent)","dates":"c.2950 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Den (Dewen)","dates":"c.2945 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Anedjib","dates":"c.2925 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Semerkhet","dates":"c.2915 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"1st Dynasty","dynastyDates":"c.3000-2890 BCE","name":"Qa'a","dates":"c.2906-2890 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Hotepsekhemwy","dates":"c.2890 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Raneb (Nebra)","dates":"c.2865 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Nynetjer","dates":"c.2840 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Weneg","dates":"c.2810 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Senedj","dates":"c.2800 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Peribsen (Seth-Peribsen)","dates":"c.2760 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Early Dynastic Period","dynasty":"2nd Dynasty","dynastyDates":"2890-2686 BCE","name":"Khasekhemwy","dates":"c.2720-2686 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"3rd Dynasty","dynastyDates":"2686-2613 BCE","name":"Sanakht (Nebka)","dates":"2686-2667 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"3rd Dynasty","dynastyDates":"2686-2613 BCE","name":"Djoser (Netjerikhet)","dates":"2667-2648 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"3rd Dynasty","dynastyDates":"2686-2613 BCE","name":"Sekhemkhet","dates":"2648-2640 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"3rd Dynasty","dynastyDates":"2686-2613 BCE","name":"Khaba","dates":"2640-2637 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"3rd Dynasty","dynastyDates":"2686-2613 BCE","name":"Huni","dates":"2637-2613 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Sneferu (Snefru)","dates":"2613-2589 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Khufu (Cheops)","dates":"2589-2566 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Djedefre (Radjedef)","dates":"2566-2558 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Khafre (Chephren)","dates":"2558-2532 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Menkaure (Mycerinus)","dates":"2532-2503 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"4th Dynasty","dynastyDates":"2613-2494 BCE","name":"Shepseskaf","dates":"2503-2498 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Userkaf","dates":"2494-2487 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Sahure","dates":"2487-2475 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Neferirkare Kakai","dates":"2475-2455 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Shepseskare","dates":"2455-2448 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Neferefre (Raneferef)","dates":"2448-2445 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Nyuserre Ini","dates":"2445-2421 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Menkauhor","dates":"2421-2414 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Djedkare Isesi","dates":"2414-2375 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"5th Dynasty","dynastyDates":"2494-2345 BCE","name":"Unas","dates":"2375-2345 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Teti","dates":"2345-2323 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Userkare","dates":"2323-2321 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Pepi I (Meryre)","dates":"2321-2287 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Merenre Nemtyemsaf I","dates":"2287-2278 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Pepi II (Neferkare)","dates":"2278-2184 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Merenre Nemtyemsaf II","dates":"2184 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Old Kingdom","dynasty":"6th Dynasty","dynastyDates":"2345-2181 BCE","name":"Nitiqret (Nitocris)","dates":"2184-2181 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"7th/8th Dynasties","dynastyDates":"2181-2160 BCE","name":"Numerous ephemeral kings (Memphite), e.g. Qakare Ibi","dates":"2181-2160 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"9th/10th Dynasties","dynastyDates":"2160-2025 BCE","name":"Herakleopolitan kings, e.g. Khety (Akhtoy)","dates":"c.2160 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"9th/10th Dynasties","dynastyDates":"2160-2025 BCE","name":"Merikare","dates":"c.2075 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"9th/10th Dynasties","dynastyDates":"2160-2025 BCE","name":"Khety (last)","dates":"c.2025 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"11th Dynasty (Theban, early)","dynastyDates":"2125-2055 BCE","name":"Intef I (Sehertawy)","dates":"2125-2112 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"11th Dynasty (Theban, early)","dynastyDates":"2125-2055 BCE","name":"Intef II (Wahankh)","dates":"2112-2063 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"First Intermediate Period","dynasty":"11th Dynasty (Theban, early)","dynastyDates":"2125-2055 BCE","name":"Intef III (Nakhtnebtepnefer)","dates":"2063-2055 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"11th Dynasty (all Egypt)","dynastyDates":"2055-1985 BCE","name":"Mentuhotep II (Nebhepetre)","dates":"2055-2004 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"11th Dynasty (all Egypt)","dynastyDates":"2055-1985 BCE","name":"Mentuhotep III (Sankhkare)","dates":"2004-1992 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"11th Dynasty (all Egypt)","dynastyDates":"2055-1985 BCE","name":"Mentuhotep IV (Nebtawyre)","dates":"1992-1985 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Amenemhat I (Sehetepibre)","dates":"1985-1956 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Senusret I (Kheperkare)","dates":"1956-1911 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Amenemhat II (Nubkaure)","dates":"1911-1877 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Senusret II (Khakheperre)","dates":"1877-1870 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Senusret III (Khakaure)","dates":"1870-1831 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Amenemhat III (Nimaatre)","dates":"1831-1786 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Amenemhat IV (Maakherure)","dates":"1786-1777 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"12th Dynasty","dynastyDates":"1985-1773 BCE","name":"Queen Sobekneferu (Sobekkare)","dates":"1777-1773 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"13th Dynasty","dynastyDates":"1773-1650 BCE","name":"~70 kings; notable Sobekhotep III","dates":"c.1745 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"13th Dynasty","dynastyDates":"1773-1650 BCE","name":"Neferhotep I","dates":"c.1740 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"13th Dynasty","dynastyDates":"1773-1650 BCE","name":"Sobekhotep IV","dates":"c.1730 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"13th Dynasty","dynastyDates":"1773-1650 BCE","name":"Ay (Merneferre)","dates":"c.1700 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Middle Kingdom","dynasty":"14th Dynasty","dynastyDates":"c.1773-1650 BCE","name":"Minor Delta rulers, e.g. Nehesy","dates":"c.1700 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"15th Dynasty (Hyksos)","dynastyDates":"1650-1550 BCE","name":"Salitis","dates":"c.1650 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"15th Dynasty (Hyksos)","dynastyDates":"1650-1550 BCE","name":"Sheshi","dates":"c.1640 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"15th Dynasty (Hyksos)","dynastyDates":"1650-1550 BCE","name":"Khyan (Seuserenre)","dates":"c.1600 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"15th Dynasty (Hyksos)","dynastyDates":"1650-1550 BCE","name":"Apepi (Apophis)","dates":"c.1590-1555 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"15th Dynasty (Hyksos)","dynastyDates":"1650-1550 BCE","name":"Khamudi","dates":"c.1555-1550 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"16th Dynasty (Theban)","dynastyDates":"c.1650-1580 BCE","name":"Minor Theban kings (concurrent with Hyksos)","dates":"c.1650-1580 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"17th Dynasty (Theban)","dynastyDates":"c.1580-1550 BCE","name":"Rahotep","dates":"c.1585 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"17th Dynasty (Theban)","dynastyDates":"c.1580-1550 BCE","name":"Sobekemsaf I","dates":"c.1570 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"17th Dynasty (Theban)","dynastyDates":"c.1580-1550 BCE","name":"Intef VII","dates":"c.1560 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"17th Dynasty (Theban)","dynastyDates":"c.1580-1550 BCE","name":"Seqenenre Taa","dates":"c.1558-1554 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Second Intermediate Period","dynasty":"17th Dynasty (Theban)","dynastyDates":"c.1580-1550 BCE","name":"Kamose (Wadjkheperre)","dates":"1555-1550 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Ahmose I (Nebpehtyre)","dates":"1550-1525 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Amenhotep I (Djeserkare)","dates":"1525-1504 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Thutmose I (Aakheperkare)","dates":"1504-1492 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Thutmose II (Aakheperenre)","dates":"1492-1479 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Hatshepsut (Maatkare)","dates":"1473-1458 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Thutmose III (Menkheperre)","dates":"1479-1425 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Amenhotep II (Aakheperure)","dates":"1427-1400 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Thutmose IV (Menkheperure)","dates":"1400-1390 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Amenhotep III (Nebmaatre)","dates":"1390-1352 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Amenhotep IV / Akhenaten","dates":"1352-1336 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Neferneferuaten / Smenkhkare","dates":"1338-1336 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Tutankhamun (Nebkheperure)","dates":"1336-1327 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Ay (Kheperkheperure)","dates":"1327-1323 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"18th Dynasty","dynastyDates":"1550-1295 BCE","name":"Horemheb (Djeserkheperure)","dates":"1323-1295 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Ramesses I (Menpehtyre)","dates":"1295-1294 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Seti I (Menmaatre)","dates":"1294-1279 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Ramesses II (Usermaatre Setepenre)","dates":"1279-1213 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Merneptah (Baenre)","dates":"1213-1203 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Amenmesse (Menmire)","dates":"1203-1200 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Seti II (Userkheperure)","dates":"1200-1194 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Siptah (Akhenre)","dates":"1194-1188 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"19th Dynasty","dynastyDates":"1295-1186 BCE","name":"Queen Tawosret (Sitre)","dates":"1188-1186 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Sethnakhte (Userkhaure)","dates":"1186-1184 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses III (Usermaatre Meryamun)","dates":"1184-1153 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses IV (Heqamaatre)","dates":"1153-1147 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses V (Usermaatre Sekheperenre)","dates":"1147-1143 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses VI (Nebmaatre Meryamun)","dates":"1143-1136 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses VII (Usermaatre Setepenre Meryamun)","dates":"1136-1129 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses VIII (Usermaatre Akhenamun)","dates":"1129-1126 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses IX (Neferkare Setepenre)","dates":"1126-1108 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses X (Khepermaatre Setepenre)","dates":"1108-1099 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"New Kingdom","dynasty":"20th Dynasty","dynastyDates":"1186-1069 BCE","name":"Ramesses XI (Menmaatre Setepenptah)","dates":"1099-1069 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Smendes I (Nesbanebdjed)","dates":"1069-1043 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Amenemnisu","dates":"1043-1039 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Psusennes I (Pasebakhaenniut)","dates":"1039-991 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Amenemope","dates":"993-984 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Osorkon the Elder (Osochor)","dates":"984-978 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Siamun","dates":"978-959 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"21st Dynasty (Tanite)","dynastyDates":"1069-945 BCE","name":"Psusennes II","dates":"959-945 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Shoshenq I (Hedjkheperre)","dates":"945-924 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Osorkon I (Sekhemkheperre)","dates":"924-889 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Shoshenq II","dates":"c.890 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Takelot I","dates":"889-874 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Osorkon II (Usermaatre)","dates":"874-850 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Takelot II","dates":"850-825 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Shoshenq III","dates":"825-773 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Pimay","dates":"773-767 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Shoshenq V","dates":"767-730 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"22nd Dynasty (Bubastite/Libyan)","dynastyDates":"945-715 BCE","name":"Osorkon IV","dates":"730-715 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"23rd Dynasty (Libyan)","dynastyDates":"818-715 BCE","name":"Pedubast I","dates":"818-793 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"23rd Dynasty (Libyan)","dynastyDates":"818-715 BCE","name":"Iuput I / Shoshenq IV (concurrent line)","dates":"c.780 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"23rd Dynasty (Libyan)","dynastyDates":"818-715 BCE","name":"Osorkon III","dates":"777-749 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"23rd Dynasty (Libyan)","dynastyDates":"818-715 BCE","name":"Takelot III","dates":"754-734 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"23rd Dynasty (Libyan)","dynastyDates":"818-715 BCE","name":"Rudamun","dates":"734-731 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"24th Dynasty (Saite)","dynastyDates":"727-715 BCE","name":"Tefnakht","dates":"727-720 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"24th Dynasty (Saite)","dynastyDates":"727-715 BCE","name":"Bakenranef (Bocchoris)","dates":"720-715 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"25th Dynasty (Kushite/Nubian)","dynastyDates":"747-656 BCE","name":"Piye (Piankhi)","dates":"747-716 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"25th Dynasty (Kushite/Nubian)","dynastyDates":"747-656 BCE","name":"Shabaka","dates":"716-702 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"25th Dynasty (Kushite/Nubian)","dynastyDates":"747-656 BCE","name":"Shabitku (Shebitku)","dates":"702-690 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"25th Dynasty (Kushite/Nubian)","dynastyDates":"747-656 BCE","name":"Taharqa (Khunefertemre)","dates":"690-664 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Third Intermediate Period","dynasty":"25th Dynasty (Kushite/Nubian)","dynastyDates":"747-656 BCE","name":"Tantamani (Tanutamun)","dates":"664-656 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Psamtik I (Wahibre)","dates":"664-610 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Necho II (Wehemibre)","dates":"610-595 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Psamtik II (Neferibre)","dates":"595-589 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Apries (Haaibre / Wahibre)","dates":"589-570 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Amasis (Ahmose II)","dates":"570-526 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"26th Dynasty (Saite)","dynastyDates":"664-525 BCE","name":"Psamtik III","dates":"526-525 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Cambyses II","dates":"525-522 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Darius I","dates":"522-486 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Xerxes I","dates":"486-465 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Artaxerxes I","dates":"465-424 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Darius II","dates":"424-405 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"27th Dynasty (First Persian Period)","dynastyDates":"525-404 BCE","name":"Artaxerxes II","dates":"405-359 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"28th Dynasty","dynastyDates":"404-399 BCE","name":"Amyrtaeus of Sais","dates":"404-399 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"29th Dynasty (Mendesian)","dynastyDates":"399-380 BCE","name":"Nepherites I (Nefaarud)","dates":"399-393 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"29th Dynasty (Mendesian)","dynastyDates":"399-380 BCE","name":"Hakor (Achoris)","dates":"393-380 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"29th Dynasty (Mendesian)","dynastyDates":"399-380 BCE","name":"Nepherites II","dates":"380 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"30th Dynasty (Sebennytos)","dynastyDates":"380-343 BCE","name":"Nectanebo I (Nakhtnebef)","dates":"380-362 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"30th Dynasty (Sebennytos)","dynastyDates":"380-343 BCE","name":"Teos (Djedhor)","dates":"362-360 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"30th Dynasty (Sebennytos)","dynastyDates":"380-343 BCE","name":"Nectanebo II (Nakhthorheb)","dates":"360-343 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"31st Dynasty (Second Persian Period)","dynastyDates":"343-332 BCE","name":"Artaxerxes III Ochus","dates":"343-338 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"31st Dynasty (Second Persian Period)","dynastyDates":"343-332 BCE","name":"Arses (Artaxerxes IV)","dates":"338-336 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Late Period","dynasty":"31st Dynasty (Second Persian Period)","dynastyDates":"343-332 BCE","name":"Darius III","dates":"336-332 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Macedonian (Argead) Period","dynasty":"Macedonian Dynasty","dynastyDates":"332-305 BCE","name":"Alexander III the Great","dates":"332-323 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Macedonian (Argead) Period","dynasty":"Macedonian Dynasty","dynastyDates":"332-305 BCE","name":"Philip III Arrhidaeus","dates":"323-317 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Macedonian (Argead) Period","dynasty":"Macedonian Dynasty","dynastyDates":"332-305 BCE","name":"Alexander IV","dates":"317-305 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy I Soter","dates":"305-282 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy II Philadelphus","dates":"285-246 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy III Euergetes I","dates":"246-221 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy IV Philopator","dates":"221-204 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy V Epiphanes","dates":"204-180 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy VI Philometor","dates":"180-145 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy VII Neos Philopator","dates":"145 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy VIII Euergetes II (Physcon)","dates":"170-116 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Cleopatra II & III (co-regents)","dates":"131-107 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy IX Soter II (Lathyros)","dates":"116-107, 88-81 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy X Alexander I","dates":"107-88 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy XI Alexander II","dates":"80 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy XII Neos Dionysos (Auletes)","dates":"80-51 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Berenice IV","dates":"58-55 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Cleopatra VII Philopator","dates":"51-30 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy XIII","dates":"51-47 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy XIV","dates":"47-44 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"},{"period":"Ptolemaic Period","dynasty":"Ptolemaic kings","dynastyDates":"305-30 BCE","name":"Ptolemy XV Caesarion","dates":"44-30 BCE","source":"Shaw, Oxford History of Ancient Egypt (2000)"}];
    let rulers = localRulers.map(ruler => ruler.name === "Narmer (Menes?)" ? { ...ruler, encyclopediaImage: "Narmer.webp" } : ruler);
    const sheetUrl = "https://docs.google.com/spreadsheets/d/1znHpHKyBoVdH4awPj9-MT24AwxkUOTPk82BbYu-GGKg/gviz/tq?tqx=out:json&sheet=Rulers";
    const periodSelect = document.querySelector("#period-select");
    const dynastySelect = document.querySelector("#dynasty-select");
    const dynastyGuideLink = document.querySelector("#dynasty-guide-link");
    const clearButton = document.querySelector("#clear-filters");
    const container = document.querySelector("#content-container");
    const recordCount = document.querySelector("#record-count");
    const unique = values => [...new Set(values)];
    const normalise = value => String(value || "").toLowerCase();
    let searchQuery = "";

    function addOptions(select, values, selected = "all") {
      select.replaceChildren(new Option(select === periodSelect ? "All periods" : "All dynasties", "all"));
      values.forEach(value => select.add(new Option(value, value)));
      select.value = values.includes(selected) ? selected : "all";
    }
    function filteredRulers() {
      const query = normalise(searchQuery).trim();
      return rulers.filter(ruler => (periodSelect.value === "all" || ruler.period === periodSelect.value) && (dynastySelect.value === "all" || ruler.dynasty === dynastySelect.value) && (!query || normalise(ruler.name).includes(query) || normalise(ruler.dynasty).includes(query) || normalise(ruler.info).includes(query)));
    }
    function refreshDynasties() {
      const previous = dynastySelect.value;
      const period = periodSelect.value;
      addOptions(dynastySelect, unique(rulers.filter(r => period === "all" || r.period === period).map(r => r.dynasty)), previous);
      updateDynastyGuideLink();
    }
    function updateDynastyGuideLink() {
      const dynasty = dynastySelect.value;
      dynastyGuideLink.hidden = dynasty === "all";
      if (dynasty !== "all") dynastyGuideLink.href = `dynasty.html?dynasty=${encodeURIComponent(dynasty)}`;
    }
    function render(note = "") {
      const visible = filteredRulers();
      recordCount.textContent = `${visible.length} ruler${visible.length === 1 ? "" : "s"} shown${note}`;
      if (!visible.length) { container.innerHTML = '<p class="message">No rulers match these filters. Try choosing another period or clear the filters.</p>'; return; }
      const fragment = document.createDocumentFragment();
      unique(visible.map(r => r.period)).forEach(period => {
        const section = document.createElement("section"); section.className = "period";
        const heading = document.createElement("h2"); heading.className = "period-title"; heading.textContent = period; section.append(heading);
        const withinPeriod = visible.filter(r => r.period === period);
        unique(withinPeriod.map(r => r.dynasty)).forEach(dynastyName => {
          const dynastyRulers = withinPeriod.filter(r => r.dynasty === dynastyName);
          const dynasty = document.createElement("section"); dynasty.className = "dynasty";
          const header = document.createElement("header"); header.className = "dynasty-header";
          const title = document.createElement("h3"); title.textContent = dynastyName;
          const dates = document.createElement("span"); dates.className = "dynasty-dates"; dates.textContent = dynastyRulers[0].dynastyDates;
          const grid = document.createElement("div"); grid.className = "rulers";
          dynastyRulers.forEach(ruler => { const card = document.createElement("article"); card.className = "ruler"; const name = document.createElement("button"); name.type = "button"; name.className = "ruler-name"; name.textContent = ruler.name; name.setAttribute("aria-haspopup", "dialog"); const reign = document.createElement("p"); reign.className = "ruler-dates"; reign.textContent = ruler.dates; const source = document.createElement("p"); source.className = "source"; source.textContent = ruler.source; const more = document.createElement("button"); more.type = "button"; more.className = "more-link"; more.textContent = "View details →"; more.setAttribute("aria-label", `View details for ${ruler.name}`); name.addEventListener("click", () => openRuler(ruler)); more.addEventListener("click", () => openRuler(ruler)); card.append(name,reign,source,more); grid.append(card); });
          const dynastyLink = document.createElement("a"); dynastyLink.className = "more-link"; dynastyLink.href = `dynasty.html?dynasty=${encodeURIComponent(dynastyName)}`; dynastyLink.textContent = "Explore dynasty →";
          header.append(title,dates,dynastyLink); dynasty.append(header,grid); section.append(dynasty);
        }); fragment.append(section);
      }); container.replaceChildren(fragment);
    }
    function update() { refreshDynasties(); render(); }
    periodSelect.addEventListener("change", update);
    dynastySelect.addEventListener("change", () => { updateDynastyGuideLink(); render(); });
    clearButton.addEventListener("click", () => { periodSelect.value = "all"; searchQuery = ""; if (searchInput) { searchInput.value = ""; } hideSuggestions(); refreshDynasties(); render(); });
    function initialise(note = "") { addOptions(periodSelect, unique(rulers.map(r => r.period))); refreshDynasties(); render(note); openFromHash(); }

    /* ---------- Detail card / modal ---------- */
    const modal = document.querySelector("#ruler-modal");
    const modalPeriod = document.querySelector("#modal-period");
    const modalName = document.querySelector("#modal-name");
    const modalDynasty = document.querySelector("#modal-dynasty");
    const modalStart = document.querySelector("#modal-start");
    const modalEnd = document.querySelector("#modal-end");
    const modalDynspan = document.querySelector("#modal-dynspan");
    const modalImage = document.querySelector("#modal-image");
    const encyclopediaLink = document.querySelector("#encyclopedia-link");
    const modalInfo = document.querySelector("#modal-info");
    const modalSource = document.querySelector("#modal-source");
    const modalClose = modal.querySelector(".modal-close");
    let lastFocused = null;

    function parseReign(value) {
      const text = String(value || "").trim();
      if (!text) return { start: "Unknown", end: "Unknown" };
      const suffix = /BCE|BC/i.test(text) ? " BCE" : (/AD|CE/i.test(text) ? " CE" : "");
      const range = text.match(/(c\.?\s*)?(\d{1,4})\s*[-–—]\s*(c\.?\s*)?(\d{1,4})/);
      if (range) return { start: (range[1] ? "c." : "") + range[2] + suffix, end: (range[3] ? "c." : "") + range[4] + suffix };
      const single = text.match(/(c\.?\s*)?(\d{1,4})/);
      if (single) return { start: text, end: text };
      return { start: text, end: text };
    }
    function currentHashName() {
      const h = location.hash || "";
      return h.startsWith("#ruler=") ? decodeURIComponent(h.slice(7)) : "";
    }
    function safeImageUrl(value) {
      try {
        const imagePath = String(value || "").trim();
        if (!imagePath) return "";
        const resolvedPath = /^(?:[a-z][a-z\d+.-]*:|\/|images\/)/i.test(imagePath) ? imagePath : `images/${imagePath}`;
        const url = new URL(resolvedPath, window.location.href);
        return /^(https?:)$/.test(url.protocol) ? url.href : "";
      } catch { return ""; }
    }
    function setModalImage(ruler) {
      const imageUrl = safeImageUrl(ruler.image);
      modalImage.replaceChildren();
      modalImage.classList.toggle("has-image", Boolean(imageUrl));
      if (!imageUrl) {
        const symbol = document.createElement("span"); symbol.setAttribute("aria-hidden", "true"); symbol.textContent = "𓁀";
        const label = document.createElement("small"); label.textContent = "Portrait coming soon";
        modalImage.append(symbol, label);
        return;
      }
      const link = document.createElement("a");
      link.href = imageUrl; link.target = "_blank"; link.rel = "noopener";
      link.setAttribute("aria-label", `Open the full-size image for ${ruler.name}`);
      const image = document.createElement("img");
      image.src = imageUrl; image.alt = `Image of ${ruler.name}`; image.loading = "eager";
      image.addEventListener("error", () => { modalImage.classList.remove("has-image"); modalImage.replaceChildren(); const label = document.createElement("small"); label.textContent = "Image unavailable"; modalImage.append(label); });
      link.append(image); modalImage.append(link);
    }
    function setEncyclopediaLink(ruler) {
      const imageUrl = safeImageUrl(ruler.encyclopediaImage);
      encyclopediaLink.hidden = !imageUrl;
      if (!imageUrl) { encyclopediaLink.removeAttribute("href"); return; }
      encyclopediaLink.href = `encyclopedia.html?ruler=${encodeURIComponent(ruler.name)}`;
      encyclopediaLink.setAttribute("aria-label", `Open the encyclopedia entry for ${ruler.name}`);
    }
    function openRuler(ruler) {
      if (!ruler) return;
      lastFocused = document.activeElement;
      const reign = parseReign(ruler.dates);
      modalPeriod.textContent = ruler.period || "";
      modalName.textContent = ruler.name || "";
      modalDynasty.textContent = ruler.dynasty || "";
      modalStart.textContent = reign.start;
      modalEnd.textContent = reign.end;
      modalDynspan.textContent = ruler.dynastyDates || "—";
      setModalImage(ruler);
      setEncyclopediaLink(ruler);
      const info = (ruler.info || "").trim();
      modalInfo.textContent = info || "A detailed biography for this ruler has not been added yet — check back soon.";
      modalInfo.classList.toggle("muted", !info);
      modalSource.textContent = ruler.source ? "Chronology: " + ruler.source : "";
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modalClose.focus();
      if (currentHashName() !== ruler.name) history.pushState({ ruler: ruler.name }, "", "#ruler=" + encodeURIComponent(ruler.name));
    }
    function hideModal() {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }
    function closeModal() {
      hideModal();
      if (currentHashName()) history.pushState("", "", location.pathname + location.search);
    }
    function openFromHash() {
      const name = currentHashName();
      if (name) {
        const match = rulers.find(r => r.name === name);
        if (match) { openRuler(match); return; }
      }
      if (!modal.hidden) hideModal();
    }
    modal.addEventListener("click", event => { if (event.target.closest("[data-close]")) closeModal(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeModal(); });
    window.addEventListener("popstate", () => { const name = currentHashName(); if (name) openFromHash(); else hideModal(); });

    /* ---------- Find a pharaoh (hero search) ---------- */
    const searchForm = document.querySelector("#pharaoh-search-form");
    const searchInput = document.querySelector("#pharaoh-search");
    const suggestionsList = document.querySelector("#search-suggestions");
    let suggestions = [];
    let activeIndex = -1;

    function computeSuggestions(value) {
      const query = normalise(value).trim();
      if (!query) return [];
      const nameMatches = rulers.filter(r => normalise(r.name).includes(query) || normalise(r.dynasty).includes(query));
      nameMatches.sort((a, b) => normalise(a.name).indexOf(query) - normalise(b.name).indexOf(query));
      const bioMatches = rulers.filter(r => !nameMatches.includes(r) && normalise(r.info).includes(query));
      return [...nameMatches, ...bioMatches].slice(0, 8);
    }
    function snippet(text, query) {
      const source = String(text || "");
      const at = normalise(source).indexOf(normalise(query));
      if (at < 0) return "";
      const start = Math.max(0, at - 22), end = Math.min(source.length, at + query.length + 30);
      return (start > 0 ? "…" : "") + source.slice(start, end).trim() + (end < source.length ? "…" : "");
    }
    function hideSuggestions() {
      if (!suggestionsList) return;
      suggestionsList.hidden = true;
      suggestionsList.replaceChildren();
      activeIndex = -1;
      if (searchInput) searchInput.setAttribute("aria-expanded", "false");
    }
    function renderSuggestions() {
      suggestionsList.replaceChildren();
      if (!searchQuery.trim()) { hideSuggestions(); return; }
      if (!suggestions.length) {
        const empty = document.createElement("li"); empty.className = "search-empty"; empty.setAttribute("role", "presentation"); empty.textContent = "Nothing matches that search.";
        suggestionsList.append(empty); suggestionsList.hidden = false; searchInput.setAttribute("aria-expanded", "true"); return;
      }
      suggestions.forEach((ruler, i) => {
        const li = document.createElement("li"); li.setAttribute("role", "presentation");
        const btn = document.createElement("button"); btn.type = "button"; btn.className = "suggestion" + (i === activeIndex ? " active" : ""); btn.setAttribute("role", "option"); btn.setAttribute("aria-selected", i === activeIndex ? "true" : "false");
        const nm = document.createElement("span"); nm.className = "s-name"; nm.textContent = ruler.name;
        const query = normalise(searchQuery).trim();
        const inName = normalise(ruler.name).includes(query) || normalise(ruler.dynasty).includes(query);
        const meta = document.createElement("span");
        if (!inName && normalise(ruler.info).includes(query)) { meta.className = "s-snippet"; meta.textContent = snippet(ruler.info, searchQuery); }
        else { meta.className = "s-meta"; meta.textContent = ruler.dynasty; }
        btn.append(nm, meta);
        btn.addEventListener("mousedown", event => { event.preventDefault(); chooseSuggestion(ruler); });
        li.append(btn); suggestionsList.append(li);
      });
      suggestionsList.hidden = false; searchInput.setAttribute("aria-expanded", "true");
    }
    function chooseSuggestion(ruler) {
      searchInput.value = ruler.name; searchQuery = ruler.name; suggestions = []; hideSuggestions(); render(); openRuler(ruler);
    }
    function onSearchInput() {
      searchQuery = searchInput.value; activeIndex = -1; suggestions = computeSuggestions(searchQuery); renderSuggestions(); render();
    }
    if (searchForm) {
      searchInput.addEventListener("input", onSearchInput);
      searchInput.addEventListener("focus", () => { if (searchQuery.trim()) { suggestions = computeSuggestions(searchQuery); renderSuggestions(); } });
      searchInput.addEventListener("keydown", event => {
        if (event.key === "ArrowDown") { event.preventDefault(); if (suggestions.length) { activeIndex = (activeIndex + 1) % suggestions.length; renderSuggestions(); } }
        else if (event.key === "ArrowUp") { event.preventDefault(); if (suggestions.length) { activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length; renderSuggestions(); } }
        else if (event.key === "Escape") { if (!suggestionsList.hidden) { hideSuggestions(); } else if (searchInput.value) { searchInput.value = ""; searchQuery = ""; render(); } }
      });
      searchForm.addEventListener("submit", event => {
        event.preventDefault();
        const choice = (activeIndex >= 0 && suggestions[activeIndex]) ? suggestions[activeIndex] : suggestions[0];
        if (choice) chooseSuggestion(choice);
      });
      document.addEventListener("click", event => { if (!searchForm.contains(event.target)) hideSuggestions(); });
      document.addEventListener("keydown", event => {
        if (event.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && modal.hidden) { event.preventDefault(); searchInput.focus(); }
      });
    }

    /* ---------- Random pharaoh ---------- */
    const randomButton = document.querySelector("#random-pharaoh");
    if (randomButton) {
      randomButton.addEventListener("click", () => {
        if (!rulers.length) return;
        openRuler(rulers[Math.floor(Math.random() * rulers.length)]);
      });
    }


    async function loadLiveSheet() {
      try {
        const response = await fetch(`${sheetUrl}&cachebust=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) throw new Error("Sheet request failed");
        const responseText = await response.text();
        const match = responseText.match(/setResponse\((.*)\);?\s*$/s);
        if (!match) throw new Error("Sheet response could not be read");
        const rows = JSON.parse(match[1]).table.rows;
        const sheetRulers = rows.map(row => (row.c || []).map(cell => cell ? cell.v : "")).filter(row => row[0] && row[3] && row[0] !== "Period" && row[3] !== "Ruler name").map(([period, dynasty, dynastyDates, name, dates, source, info, image, encyclopediaImage]) => ({ period, dynasty, dynastyDates, name, dates, source, info, image, encyclopediaImage }));
        if (!sheetRulers.length) throw new Error("Sheet contained no ruler rows");
        rulers = sheetRulers;
        initialise();
      } catch (error) {
        initialise(" · showing saved copy");
      }
    }
    loadLiveSheet();
  
