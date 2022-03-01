import 'package:flutter/material.dart';

class Book extends StatelessWidget {
  const Book(
      {Key? key, required this.image, required this.title, required this.autor})
      : super(key: key);

  final String image;
  final String title;
  final String autor;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 30),
        child: Row(
          children: [
            Image.network(
              image,
              height: 70,
              width: 50,
              fit: BoxFit.fill,
            ),
            Flexible(
              child: Container(
                margin: const EdgeInsets.only(left: 15),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      title,
                      style: const TextStyle(
                          fontSize: 20, fontWeight: FontWeight.bold),
                      maxLines: 2,
                    ),
                    Text(
                      autor,
                    )
                  ],
                ),
                height: 70,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
