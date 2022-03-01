import 'package:flutter/material.dart';

import 'screens/book_detail.dart';
import 'screens/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: "/",
      routes: {
        "/": (BuildContext context) => const MyHomePage(),
        "/book_detail": (BuildContext context) => const BookDetail()
      },
    );
  }
}
