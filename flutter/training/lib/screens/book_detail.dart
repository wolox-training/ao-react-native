import 'package:flutter/material.dart';

class BookDetailArguments {
  final String image;
  final String title;
  final String autor;
  final String year;
  final String type;

  BookDetailArguments(this.image, this.title, this.autor, this.year, this.type);
}

class BookDetail extends StatelessWidget {
  const BookDetail({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final args =
        ModalRoute.of(context)!.settings.arguments as BookDetailArguments;
    return Scaffold(
      backgroundColor: Colors.blue[50],
      appBar: AppBar(title: const Text("BOOK DETAIL")),
      body: Padding(
        padding: const EdgeInsets.all(15),
        child: Card(
            child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 30),
          child: Wrap(
            children: [
              Container(
                margin: const EdgeInsets.only(bottom: 20),
                child: Row(
                  children: <Widget>[
                    Image.network(
                      args.image,
                      height: 100,
                    ),
                    Flexible(
                      child: Container(
                        height: 100,
                        margin: const EdgeInsets.only(left: 20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              args.title,
                              style: const TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold),
                              maxLines: 2,
                            ),
                            Text(
                              args.autor,
                            ),
                            Text(
                              args.year,
                            ),
                            Text(
                              args.type,
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Column(
                children: [
                  FractionallySizedBox(
                    widthFactor: 1,
                    child: OutlinedButton(
                        style: OutlinedButton.styleFrom(
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(50))),
                        onPressed: _onPressAddButton,
                        child: const Text("ADD TO WISHLIST")),
                  ),
                  FractionallySizedBox(
                    widthFactor: 1,
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(50))),
                        child: const Text("RENT"),
                        onPressed: _onPressRentButton),
                  )
                ],
              )
            ],
          ),
        )),
      ),
    );
  }

  void _onPressAddButton() {}

  void _onPressRentButton() {}
}
