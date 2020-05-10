import React from 'react';
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from "react-native";
import vibrate from '../utils/vibrate';

class CronoComponent extends React.Component{
    

    constructor(){
       super();
       this.state = {
           minutes: 0,
           seconds: 0,
           isRestTime: false,
           timer: () =>{}
       }
    }

    render(){
        return ( 

                <View>
                    <Text style = {styles.cronoText}>{this.formatTime()}</Text>
                    <View style = {styles.buttonBar}>
                        <Button style = {styles.controlButtons} title="restart" onPress={() => this.restart()} />
                        <Button style = {styles.controlButtons} title="pause" onPress={() => this.PauseTimer()} />
                        <Button style = {styles.controlButtons} title="resume" onPress={() => this.resumeTimer()} />
                    </View>
                </View>
                
            )
    }

    formatTime(){
        let formatMinutes = '';
        let formatSeconds = '';

        if(this.state.minutes.toString().length < 2){
            formatMinutes = '0' + this.state.minutes;
        }else{
            formatMinutes = this.state.minutes;
        }

        if(this.state.seconds.toString().length < 2){
            formatSeconds = '0' + this.state.seconds;
        }else{
            formatSeconds = this.state.seconds;
        }

        return formatMinutes + ':' + formatSeconds;
    }

    componentDidMount(){
      this.restart();
    }

    restart(){
        this.setState({
            minutes: 1,
            seconds: 0,
            isRestTime: false
        });
        clearInterval(this.state.timer);
        this.startTimer();
    }

    setRestTime(){
        this.setState({
            minutes: 5,
            seconds: 0,
            isRestTime: true
        });
        this.startTimer();
    }

    PauseTimer(){
        clearInterval(this.state.timer);
    }

    resumeTimer(){
        this.startTimer();
    }

    startTimer(){
        this.setState({
            timer: setInterval(() => {
                if(this.state.seconds === 0){
                    if(this.state.minutes === 0){
                        vibrate();
                        clearInterval(this.state.timer);
                        if(!this.state.isRestTime){
                            this.setRestTime();
                        }else{
                            this.restart();
                        }
                    }else{
                        this.setState({
                            minutes: this.state.minutes - 1,
                            seconds: 59
                        });
                    }
                }else{
                    this.setState({
                        minutes: this.state.minutes,
                        seconds: this.state.seconds - 1
                    });
                }
            }, 1000)
        });
    }

  
    
}

const styles = StyleSheet.create({
    buttonBar: {
        flexDirection: "row",
        width: '100%'
    },
    cronoText: {
        fontSize: 46,
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        padding: 20     
    },
    controlButtons: {
        paddingRight: '10%',
        width: '20%'
    } 
});


export default CronoComponent;