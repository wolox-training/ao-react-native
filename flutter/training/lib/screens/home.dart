import 'package:flutter/material.dart';
import 'package:training/screens/book_detail.dart';
import 'package:training/widgets/book.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Map<String, String>> books = [
    {
      "image":
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      "title": "A Little Bird Told Me",
      "autor": "Timothy Cross",
      "year": "1982",
      "type": "random"
    },
    {
      "image":
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      "title": "When the Doves Disappeared",
      "autor": "Sofi Oksanen",
      "year": "1976",
      "type": "random"
    },
    {
      "image":
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      "title": "The Best Book in the World",
      "autor": "Peter Sjernstrom",
      "year": "1993",
      "type": "random"
    },
    {
      "image":
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      "title": "Be Creative",
      "autor": "Tony Alcazar",
      "year": "1930",
      "type": "random"
    },
    {
      "image":
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      "title": "Redesign the web",
      "autor": "Liliana Castilla",
      "year": "1980",
      "type": "random"
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue[50],
      appBar: AppBar(
        title: const Text("LIBRARY"),
      ),
      body: ListView.builder(
          padding: const EdgeInsets.all(15),
          itemCount: books.length,
          itemBuilder: (BuildContext context, int index) {
            return GestureDetector(
                onTap: () {
                  goToDetail(book: books[index]);
                },
                child: Book(
                    image: books[index]["image"]!,
                    title: books[index]["title"]!,
                    autor: books[index]["autor"]!));
          }),
    );
  }

  void goToDetail({book}) {
    Navigator.of(context).pushNamed("/book_detail",
        arguments: BookDetailArguments(book["image"], book["title"],
            book["autor"], book["year"], book["type"]));
  }
}
