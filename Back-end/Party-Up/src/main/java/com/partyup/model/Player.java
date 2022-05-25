package com.partyup.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String username;

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    @ManyToOne
    private State state;

    @OneToMany
    private List<Rate> rates;

    @OneToMany
    private List<Handle> handles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public List<Rate> getRates() {
        return rates;
    }

    public void setRates(List<Rate> userRate) {
        this.rates = userRate;
    }

    public List<Handle> getUserHandles() {
        return handles;
    }

    public void setUserHandles(List<Handle> handles) {
        this.handles = handles;
    }
}
