package com.example.portfolio_new2.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Home - My Portfolio");
        return "index";
    }

    @GetMapping("/about")
    public String about(Model model) {
        model.addAttribute("title", "About Me");
        return "about";
    }

    @GetMapping("/projects")
    public String projects(Model model) {
        model.addAttribute("title", "My Projects");
        return "projects";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("title", "Contact Me");
        return "contact";
    }
}
