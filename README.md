# Homebridge Button

Supports triggering General Purpose Input Output (GPIO) pins on the Raspberry Pi.
Useful to control relay from button with Siri.

It use rpio library to achieve that.

## Requirements
-	[Homebridge](https://github.com/nfarina/homebridge) - _HomeKit support for the impatient_

## Installation
1.	Install Homebridge using `npm install -g homebridge`
2.	Install this plugin using:
    `git clone https://github.com/Paulraita/homebridge-button.git && cd homebridge-button && sudo npm install `
3.	Update your configuration file - see `config-sample.json` in this repo

## Configuration
Example `config.json`

```json
{
  "accessories": [
    {
      "accessory": "Button",
      "name": "ButtonTest",
      "pin": 12,
      "out": 11
    }
  ]
}
```

## Pin Configuration

> This couldn't have been more confusing. Raspberry Pi's physical pins are not laid out in any particular logical order. Most of them are given the names of the pins of the Broadcom chip it uses (BCM2835). There isn't even a logical relationship between the physical layout of the Raspberry Pi pin header and the Broadcom chip's pinout. The OS recognizes the names of the Broadcom chip and has nothing to do with the physical pin layout on the Pi. To add to the fun, the specs for the Broadcom chip are nearly impossible to get!

<table>
    <tr>
        <td>P1 - 3.3v</td>
        <td>1</td>
        <td>2</td>
        <td>5v</td>
    </tr>
    <tr>
        <td>I2C SDA</td>
        <td>3</td>
        <td>4</td>
        <td>--</td>
    </tr>
    <tr>
        <td>I2C SCL</td>
        <td>5</td>
        <td>6</td>
        <td>Ground</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>7</td>
        <td>8</td>
        <td>TX</td>
    </tr>
    <tr>
        <td>--</td>
        <td>9</td>
        <td>10</td>
        <td>RX</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>11</td>
        <td>12</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>13</td>
        <td>14</td>
        <td>--</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>15</td>
        <td>16</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>--</td>
        <td>17</td>
        <td>18</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>SPI MOSI</td>
        <td>19</td>
        <td>20</td>
        <td>--</td>
    </tr>
    <tr>
        <td>SPI MISO</td>
        <td>21</td>
        <td>22</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>SPI SCLK</td>
        <td>23</td>
        <td>24</td>
        <td>SPI CE0</td>
    </tr>
    <tr>
        <td>--</td>
        <td>25</td>
        <td>26</td>
        <td>SPI CE1</td>
    </tr>
    <tr>
        <td colspan="4">Model A+ and Model B+ additional pins</td>
    </tr>
    <tr>
        <td>ID_SD</td>
        <td>27</td>
        <td>28</td>
        <td>ID_SC</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>29</td>
        <td>30</td>
        <td>--</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>31</td>
        <td>32</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>33</td>
        <td>34</td>
        <td>--</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>35</td>
        <td>36</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>GPIO</td>
        <td>37</td>
        <td>38</td>
        <td>GPIO</td>
    </tr>
    <tr>
        <td>--</td>
        <td>39</td>
        <td>40</td>
        <td>GPIO</td>
    </tr>
</table>
